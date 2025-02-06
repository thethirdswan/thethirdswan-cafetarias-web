"use client";

import { Suspense } from 'react';
import LoginLoading from '../ui/loadingSkeletons/loading';
import Signup from '../ui/pages/signup';

export default function SuspenseSignin() {
    return (
        <Suspense fallback={<LoginLoading/>}>
            <Signup/>
        </Suspense>
    )
}