"use server";

import { redirect } from "next/navigation";
import { ZodError } from "zod"
import { signUpSchema } from "./zod";
import { userSchema } from "./mongodbschema";
import { signIn } from "../auth";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export default async function signup(formData: FormData) {
    const form = {
        nama: formData.get("nama"),
        username: formData.get("username"),
        password: formData.get("password")
    }
    try {
        const { nama, username, password } = await signUpSchema.parseAsync(form)
        
        const conn = mongoose.createConnection(process.env.MONGODB_URI || "", {dbName:'Users'})
        const User = conn.model('Users', userSchema);
        if (await User.findOne({ username: username })) {
            throw new Error("Username sudah digunakan.")
        }
        const hash = await bcrypt.hash(password, 10);

        await User.create({ nama: nama, username: username, password: hash, lokasi: "Belum Ditentukan", admin: "false"})
        await signIn("credentials", {username, password});
    } catch (error) {
        if (error instanceof ZodError) {
            console.log(`Kredensial salah! \n${error}`)
            return;
        }
        console.log(`something else happened; ${error}`)
    } finally {
        redirect("/");
    }
}