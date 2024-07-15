"use server";
import {z} from "zod";

const formSchema = z.object({
    username: z.string({
        invalid_type_error: "Username must be a string",
        required_error: "Please enter your username"
    }).min(3, "Username should be at least 3 characters")
      .max(10, "Username should be at most 10 characters")
      .refine((username)=> !(username.includes("potato")), "No potatoes allowed"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
}).superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirm_password"],
      });
    }
  });

export async function createAccount(prevState:any, formData:FormData){
    const data ={
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirm_password: formData.get("confirm_password"),
    };
    const result = formSchema.safeParse(data);
    if(!result.success) {
        return result.error.flatten();
    }
}