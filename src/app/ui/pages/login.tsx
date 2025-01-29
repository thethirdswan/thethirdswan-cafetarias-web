import { authenticate } from "@/app/lib/signin";
import { ErrorOutline } from "@mui/icons-material";
import { Card, CardContent, Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

export default function Login() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
      );
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    return (
        <Card className="mx-2 md:mx-[24.707vw]">
            <CardContent>
                {errorMessage && (
                    <div className='bg-red-400 text-red-800 p-2'>
                        <p><ErrorOutline/>{errorMessage}</p>
                    </div>
                )}
                <form method='POST' 
                action={formAction}
                >
                    <label htmlFor='username'>Username</label><br/>
                    <input type='text' name='username' className='border' minLength={2} required/><br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input type='password' name='password' className='border' required/><br/>
                    <input type="hidden" name="redirectTo" value={callbackUrl} />
                    <Button variant='contained' className='my-2' 
                    aria-disabled={isPending}
                    >
                        <input type='submit' value="Masuk"></input>
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}