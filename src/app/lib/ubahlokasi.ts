"use server";

import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function ubahlokasi(formData: FormData) {
    const session = await auth();
    const res = await fetch(`${process.env.SERVER_URL}/ubahlokasi`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username: session?.user?.username,
                lokasi: formData.get("lokasi"),
            }
        })
    }).then(() => redirect("/"))
}