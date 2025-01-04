import { signOut } from "../auth";
import { Button } from "@mui/material";

export function SignOut() {
    return (
        <form action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
        }}>
            <Button variant="contained" color="error" className="m-5"><input type="submit" value="Keluar" /></Button>
        </form>
    )
}