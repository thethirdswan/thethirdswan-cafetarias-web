"use server";

import { redirect } from "next/navigation";
import { MongoClient } from "mongodb";
import bcrypt from 'bcrypt';

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
    bcrypt.compare(formData.get("password")!.toString(), user.password, function(err, result) {
        if (!result) {
            console.error("password salah bangke");
            return;
        } else {
        redirect("/");
        }
    })
}