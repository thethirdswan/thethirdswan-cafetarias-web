"use server";

import { redirect } from "next/navigation";
import { MongoClient } from "mongodb";

export default async function login(formData: FormData) {
    const client = new MongoClient(process.env.MONGODB_URI || "")
    let conn;
    try {
        conn = client.connect();
    } catch (e) {
        console.error(e);
    }
    let db = (await conn!).db("Users");
    let users = db.collection("USER");
    let user = await users.findOne({username: formData.get("username")});
    if (user == null) {
        console.error("ga ada usernamenya goblok");
        return;
    }
    if (user.password != formData.get("password")) {
        console.error("password salah bangke");
        return;
    }
    // localStorage.setItem("logged_in", "true");
    // localStorage.setItem("logged_user", JSON.stringify(user));
    redirect("/");
}