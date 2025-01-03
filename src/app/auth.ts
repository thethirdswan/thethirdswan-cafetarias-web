import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod"
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null
    
                    const { username, password } = await signInSchema.parseAsync(credentials)
    
                    const conn = mongoose.createConnection(process.env.MONGODB_URI || "")
                    const userSchema = new mongoose.Schema({
                        nama: {
                            type: String,
                            required: true,
                        },
                        lokasi: {
                            type: String,
                            required: true,
                        },
                        username: {
                            type: String,
                            required: true,
                        },
                        password: {
                            type: String,
                            required: true,
                        },
                        admin: {
                            type: String,
                            required: true,
                        }
                    },
                    { collection: 'USER'});
                    const User = conn.model('Users', userSchema);
                    const logginguser = await User.findOne({ 'username': username })
                    console.log(`user: ${logginguser}`)
                    bcrypt.compare(password, logginguser!.password, function (err, result) {
                        if (result) {
                            user = logginguser
                            return user;
                        } else {
                            return null;
                        }
                    })
                } catch (error) {
                    if (error instanceof ZodError) {
                        console.log(`zod error happened. \n${error}`)
                        return null;
                    }
                    console.log(`something else happened. \n${error}`)
                }
                return null;
            }
        })
    ],
})
