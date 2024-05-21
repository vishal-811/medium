import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate"
import { decode, sign, verify} from "hono/jwt"

const userRouter =new Hono<{
      Bindings:{
         DATABASE_URL:string
         JWT_SECRET:string
      }
}>();

userRouter.post('/signup',async(c)=>{
       const prisma =new PrismaClient({
           datasourceUrl:c.env?.DATABASE_URL 
       }).$extends(withAccelerate());
        try {
            const body =await c.req.json();
              const alreadyexist = await prisma.user.findUnique({
                   where:{
                      email:body.email
                   }
              })
              if(alreadyexist){
                  c.status(409)
                  return c.json({msg:"User already exist with this credentials"})
              }
            const user =await prisma.user.create({
                 data:{
                    username:body.username,
                    email:body.email,
                    name:body.name,
                    password:body.password
                 }
            })
            const jwt = await sign({
                 id:user.id
            },c.env.JWT_SECRET)
           return c.json({msg:"user signup sucessfully",token:jwt}); 
        } catch (error) {
             c.status(403)
             return c.json({msg:"Error While Signup"})
        }
})

userRouter.post('/signin',async(c)=>{
       const prisma =new PrismaClient({
            datasourceUrl:c.env?.DATABASE_URL
       }).$extends(withAccelerate())
       
       try {
        const body = await c.req.json();
        const user = await prisma.user.findUnique({
             where:{
                 email:body.email,
                 password:body.password
             }
        })
        if(!user){
            c.status(400)
            return c.json({msg:"User doesn't exist with this credentials,Please signup"}) 
        }
         const jwt = await sign({
              id:user.id
         },c.env.JWT_SECRET)
        return c.json({msg:"User signin successfully" , token:jwt})
       } catch (error) {
           console.error(error);
            return c.json({msg:"Signin failed,something went wrong"})
       }
})

export default userRouter;