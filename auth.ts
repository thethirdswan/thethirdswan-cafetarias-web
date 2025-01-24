import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod"
import { signInSchema } from "./src/app/lib/zod"
import { userSchema } from "./src/app/lib/mongodbschema";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

declare module "next-auth" {
    interface User {
      _id: string;
      nama: string;
      lokasi: string;
      username: string;
      password: string;
      admin: string;
    }
  }

let user: any = null;

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
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
                    const logginguser = await User.findOne({ username: username });
                    if (!logginguser) {
                      throw new Error("Pengguna tidak ditemukan.");
                    }
                    const result = await bcrypt.compare(password, logginguser!.password)
                    if (result) {
                        user = logginguser;
                    } else {
                      throw new Error("Password salah.");
                    }
                    return user;
                } catch (error) {
                    if (error instanceof ZodError) {
                      const formattedError = error.format()
                      console.error("Kredensial salah!\n" + formattedError._errors)
                    } else {
                      console.error("something else happened.\n" + error)
                    }
                }
            }
        })
    ],
    session: {strategy : "jwt"},
    callbacks: {
        async session({ session, token }) {
          session.user = token.user as any;
          return session;
        },
        async jwt({ token, user, trigger, session }) {
          if (user) {
            token.user = user;
          }
          if (trigger === "update" && session?.user) {
            token.user = session.user;
          }
          return token;
        },
      },
})