import { z } from 'zod';

export const SignupSchema = z.object({
     name:z.string().optional(),
     username:z.string(),
     email:z.string().email("Please enter a valid email"),
     password:z.string().min(6,"password will be min of 6 length")
})

export  const signinSchema = z.object({
     email:z.string().email("Please enter a valid email"),
     password:z.string()
})

export const postBlogSchema = z.object({
     title:z.string().min(3),
     content:z.string().min(3)
})

export const updateBlogSchema =z.object({
     title:z.string().min(3),
     content:z.string().min(3),
     author:z.string(),
     thumbnail:z.string()
})

export type SignupParams = z.infer<typeof SignupSchema>
export type signinParams = z.infer<typeof signinSchema>
export type postBlogParams =z.infer<typeof postBlogSchema>
export type updateBlogParams =z.infer<typeof updateBlogSchema>
