"use client";

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import login from "../lib/server";
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("")
    function loginValid(e: any) {
        if (username.length < 2) {
            alert("username ga boleh kurang dari dua huruf mmk");
            e.preventDefault();
        }
        if (username.includes(" ")) {
            alert("username ga boleh isi spasi kntl");
            e.preventDefault();
        }
    }

    return (
        <Card className="mx-2 md:mx-[24.707vw]">
            <CardContent>
                <form method='POST' onSubmit={loginValid} action={login} encType='application/x-www-form-urlencoded'>
                    <label htmlFor='username'>Username</label><br/>
                    <input type='text' name='username' className='border' required onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input type='password' name='password' className='border' required/><br/>
                    <Button variant='contained' className='my-2'>
                        <input type='submit' value="Masuk"></input>
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}