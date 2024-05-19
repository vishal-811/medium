import { Hono } from "hono";

const blogRouter =new Hono();

blogRouter.post('/post',async(c)=>{
     return c.json({msg:"daalo blog"});
})

blogRouter.put('/update' ,async(c)=>{
      return c.json({msg:"Blog updated Successfully"});
})

blogRouter.get('/blogdetails/:id',async(c)=>{
    return c.json({msg:"Blog fetched Successfully"});
})
blogRouter.get("/blogdetails/bulk",async(c)=>{
    return c.json({msg:"Blog data fetched successfully"})
})

export default blogRouter;