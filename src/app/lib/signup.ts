"use server";

import { signUpSchema } from "./zod";
import { signIn } from "../../../auth";
import { permanentRedirect } from "next/navigation";

export async function signup(prevState: string | undefined, formData: FormData) {
    const form = {
        nama: formData.get("nama"),
        username: formData.get("username"),
        password: formData.get("password")
    }
    const error = false;
    const { nama, username, password } = await signUpSchema.parseAsync(form)
    try {
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
    } catch (error) {
        error = true;
        return "Username telah digunakan."
    }
    if (error) {
        return;
    } else {
        await signIn("credentials", {username, password});
        
    }
}