"use server"
import { signOut } from "../auth";
import { Button } from "@mui/material";

export async function SignOut() {
    return (
        <form action={async () => {
            await signOut()
        }}>
            <Button variant="contained" color="error" className="m-5"><input type="submit" value="Sign Out" /></Button>
        </form>
    )
}