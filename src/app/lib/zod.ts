import { object, string } from "zod"
 
export const signInSchema = object({
  username: string({ required_error: "Username diperlukan" })
    .min(1, "Username diperlukan")
    .min(2, "Username harus lebih dari dua huruf"),
  password: string({ required_error: "Password diperlukan" })
    .min(1, "Password diperlukan")
})

export const signUpSchema = object({
    nama: string({ required_error: "Nama diperlukan"})
    .min(1, "Nama diperlukan")
    .min(2, "Nama harus lebih dari dua huruf"),
    username: string({ required_error: "Username diperlukan" })
    .min(1, "Username diperlukan")
    .min(2, "Username harus lebih dari dua huruf")
    .includes(" ", {message: "Username tidak boleh memiliki spasi"}),
    password: string({ required_error: "Password diperlukan" })
    .min(1, "Password diperlukan")
})