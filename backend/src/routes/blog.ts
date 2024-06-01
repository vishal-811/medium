import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blogRouter =new Hono<{
      Bindings:{
         DATABASE_URL:string,
         JWT_SECRET:string  
      },
      Variables: {
        user_id: string,
        prisma: any
    }
}>();

// Middleware 
blogRouter.use('/*', async (c, next) => {
    try {
        const header = c.req.header("authorization") || "";
        const token = header.split(' ')[1];
        if (!token) {
            c.status(401);
            return c.json({ error: "Token is required" });
        }
        const responsePayload = await verify(token, c.env.JWT_SECRET);
        if (responsePayload.id) {
            c.set("user_id", responsePayload.id);
          await next();
        }
        else {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }
    } catch (error) {
        console.log(error);
        c.status(403)
        return c.json({ error:"something went up to middlewares" });
    }
})

blogRouter.post('/post',async(c)=>{
      const prisma = new PrismaClient({
          datasourceUrl:c.env.DATABASE_URL
      }).$extends(withAccelerate())

     try {
        const body = await c.req.json();
        await prisma.blog.create({
             data:{
                 title:body.title,
                 content:body.content,
                 authorId:c.get("user_id"),
                 thumbnail:body.thumbnail,
                //  published:body.published,
             }
        })
       return c.json({msg:"Blog Posted Successfully"});
     } catch (error) {
          console.log(error);
         c.status(403)
         return c.json({error:"Something went wrong"});
     }
})

blogRouter.put('/update' ,async(c)=>{
        const prisma =new PrismaClient({
             datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate())
        try {
            const body =await c.req.json();
            await prisma.blog.update({
               where:{
                  id:body.id
               },
               data:{
                  title:body.title,
                  content:body.content,
                  author:body.author,
                  thumbnail:body.thumbnail,
                  published:body.published
               }
            })
        return c.json({msg:"Blog updated Successfully"});
        } catch (error) {
             c.status(403)
             return c.json({error:"Blog does not updated"});
        }
})

blogRouter.get('/:id',async(c)=>{
       const prisma = new PrismaClient({
           datasourceUrl:c.env.DATABASE_URL
       }).$extends(withAccelerate());
       const id = c.req.param('id');

       // Validate the ID
       if (!id) {
           c.status(400);
           return c.json({ error: "ID parameter is required" });
       }
       
       try {
           const blog = await prisma.blog.findFirst({
               where: {
                   id: id,
               },
               select: {
                   id: true,
                   title: true,
                   content: true,
                   thumbnail: true,
                   author:{
                    select:{
                        name:true,
                    }
                   },
               },
           });
       
           if (!blog) {
               c.status(404); 
               return c.json({ error: "Blog not found!" });
           }
       
           return c.json({ msg: "Blog fetched successfully", blog: blog }); // Return the fetched blog data
       } catch (error) {
           console.error(error);
           c.status(500); // Internal server error for any unexpected issues
           return c.json({ error: "An error occurred while fetching the blog" });
       }
})
blogRouter.get("/blogdetails/bulk",async(c)=>{
       const prisma =new PrismaClient({
           datasourceUrl:c.env.DATABASE_URL
       }).$extends(withAccelerate())
        
       try {
        const blogs = await prisma.blog.findMany({});
        if(!blogs){
            return c.json({msg:"No blogs are available"})
        }
           return c.json({msg:"Blog data fetched successfully",blogs:blogs})
       } catch (error) {
          return c.json({msg:"Something went wrong while fetching Blogs"})
       } 
})

export default blogRouter;