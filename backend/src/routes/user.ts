import { Hono } from "hono";

const userRouter =new Hono();

userRouter.post('/signup',async(c)=>{
    return c.json({msg:"user signup sucessfully"});
})

userRouter.post('/signin',async(c)=>{
    return c.json({msg:"user signin successfully"});
})

export default userRouter;