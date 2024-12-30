"use client";

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import signup from '@/app/lib/signup';
import { useState } from 'react';

export default function Signup() {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    function signupValid(e: any) {
        if (name.length < 2) {
            alert("Nama tidak boleh kurang dari dua huruf.");
            e.preventDefault();
        }
        if (username.length < 2) {
            alert("username ga boleh kurang dari dua huruf mmk");
            e.preventDefault();
        }
        if (username.includes(" ")) {
            alert("username ga boleh isi spasi kntl")
            e.preventDefault();
        }
    }

    return (
        <Card className="mx-2 md:mx-[24.707vw]">
            <CardContent>
                <form method='POST' onSubmit={signupValid} action={signup}>
                    <label htmlFor='username'>Nama</label><br/>
                    <input type='text' name='nama' className='border' required onChange={(e) => setName(e.target.value)}/><br/>
                    <label htmlFor='username'>Username</label><br/>
                    <input type='text' name='username' className='border' required onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input type='password' name='password' className='border' required/><br/>
                    <Button variant='contained' className='my-2'>
                        <input type='submit' value="Daftar"></input>
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}