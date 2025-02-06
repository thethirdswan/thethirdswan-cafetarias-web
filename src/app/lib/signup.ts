"use server";

import { signUpSchema } from "./zod";
import { signIn } from "../../../auth";

export async function signup(prevState: string | undefined, formData: FormData) {
    const form = {
        nama: formData.get("nama"),
        username: formData.get("username"),
        password: formData.get("password")
    }
    try {
        const { nama, username, password } = await signUpSchema.parseAsync(form)
        
        const res = await fetch(`${process.env.SERVER_URL}/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    nama: nama,
                    username: username,
                    password: password,
                }
            })
        })
        const json = await res.json()
        if (res.status == 400) {
            throw new Error(json.message)
        }
        await signIn("credentials", {username, password});
    } catch (error) {
        return "Username telah digunakan."
    }
}