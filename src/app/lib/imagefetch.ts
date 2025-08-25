"use server";

import { AwsClient } from "aws4fetch";

const r2 = new AwsClient({
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
});

export default async function imageFetch(link: string, type : string) {
    
}