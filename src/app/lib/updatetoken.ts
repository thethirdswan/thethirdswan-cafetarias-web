"use server";

import { auth } from "../../../auth";

export default async function updateToken(token: string) {
    const session = await auth()

    await fetch(`${process.env.SERVER_URL}/entertoken`, {
        method: "PUT",
        body: JSON.stringify({
            user: {
                username: session?.user?.username,
                token: token
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}