import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod"
import { signInSchema } from "./src/app/lib/zod"
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

                    const req = await fetch(`${process.env.SERVER_URL}/signin`, {
                      method: "POST",
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        user: {
                          username: username, 
                          password: password
                        }
                      })
                    })
                    const json = await req.json()
                    user = json.logginguser
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