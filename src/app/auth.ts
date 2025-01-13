import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod"
import { userSchema } from "./lib/mongodbschema";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

declare module "next-auth" {
    interface User {
      nama: string | null;
      lokasi: string | null;
      username: string | null;
    }
  }

let user: any = null;

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    const { username, password } = await signInSchema.parseAsync(credentials)
    
                    const conn = mongoose.createConnection(process.env.MONGODB_URI || "", {dbName:'Users'})
                    const User = conn.model('Users', userSchema);
                    const logginguser = await User.findOne({ username: username })
                    if (!logginguser) {
                      throw new Error("Pengguna tidak ditemukan.")
                    }
                    const result = await bcrypt.compare(password, logginguser!.password)
                    if (result) {
                        user = logginguser;
                    }
                } catch (error) {
                    if (error instanceof ZodError) {
                      console.error("Kredensial salah!\n" + error.message)
                      return null;
                    }
                    console.error("something else happened.\n" + error)
                } finally {
                    return user;
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
          session.user = token.user as any;
          return session;
        },
        async jwt({ token, user }) {
          if (user) {
            token.user = user;
          }
          return token;
        },
      },
})