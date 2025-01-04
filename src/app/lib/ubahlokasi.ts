"use server";

import mongoose from "mongoose";
import { auth, signOut } from "../auth";
import { userSchema } from "./mongodbschema";

export default async function ubahlokasi(formData: FormData) {
    const session = await auth();
    const conn = mongoose.createConnection(process.env.MONGODB_URI || "", {dbName:'Users'});
    const User = conn.model('Users', userSchema);
    await User.updateOne({ username: session?.user?.username }, { lokasi: formData.get("lokasi")});
    await signOut({ redirectTo: "/" });
}