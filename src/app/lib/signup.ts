"use server";

import { redirect } from "next/navigation";
import { MongoClient } from "mongodb";
import bcrypt from 'bcrypt';

export default async function signup(formData: FormData) {
    const client = new MongoClient(process.env.MONGODB_URI || "")
    let conn;
    try {
        conn = client.connect();
    } catch (e) {
        console.error(e);
    }
    let db = (await conn!).db("Users");
    let users = db.collection("USER");
    if (await users.findOne({username: formData.get("username")}) != null) {
        console.error("username udah dipake anj")
        return;
    }
    bcrypt.hash(formData.get("password")!.toString(), 10, function (err, hash) {
        users.insertOne({
            "nama": formData.get("nama"),
            "lokasi": "Belum Ditentukan",
            "username": formData.get("username"),
            "password": hash,
            "admin": "false",
        })
    })
    redirect("/");
}