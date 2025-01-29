"use client";

import { Suspense } from 'react';
import LoginLoading from '../ui/loadingSkeletons/loginloading';
import Login from '../ui/pages/login';

export default function SuspenseLogin() {
    return (
        <Suspense fallback={<LoginLoading/>}>
            <Login/>
        </Suspense>
    )
}