"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import db from "@/lib/db";
import {z} from "zod";

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
        where: {
          username
        },
        select: {
          id: true
        }
      })
  return !Boolean(user)
}

const checkUniqueEmail = async (email: string) => {
  const userEmail = await db.user.findUnique({
        where: {
          email
        },
        select: {
          id: true
        }
      })
  return !Boolean(userEmail)
}

const formSchema = z.object({
    username: z.string({
        invalid_type_error: "Username must be a string",
        required_error: "Please enter your username"
    })
      .toLowerCase()
      .trim()
      .refine(checkUniqueUsername, "This username is already taken")
      ,
      //.refine((username)=> !(username.includes("potato")), "No potatoes allowed"),
    email: z.string().email().toLowerCase().refine(checkUniqueEmail, "There is an account already register with that email"),
    password: z.string().min(PASSWORD_MIN_LENGTH),//.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
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
    const result = await formSchema.safeParseAsync(data);
    if(!result.success) {
        return result.error.flatten();
    } else {
      // hash password

      // save user into db

      // log the user in 

      // redirect the user to "/home"
    }
}