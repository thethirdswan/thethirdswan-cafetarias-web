"use client";

import { Suspense } from 'react';
import LoginLoading from '../ui/loadingSkeletons/loading';
import Signin from '../ui/pages/signin';

export default function SuspenseSignin() {
    return (
        <Suspense fallback={<LoginLoading/>}>
            <Signin/>
        </Suspense>
    )
}