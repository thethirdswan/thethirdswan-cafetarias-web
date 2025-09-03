"use server";

import { AwsClient } from "aws4fetch";

const r2 = new AwsClient({
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
});

export default async function imageFetch(link: string, type : string) {
    const url = new URL(`https://cafetaria.1a0b8d0a0494f9d2d0c70ca8f1d86580.r2.cloudflarestorage.com/${type}/${link}.jpg`);
    url.searchParams.set("X-Amz-Expires", "3600");

    return await r2.sign(
        new Request(url), { aws: { signQuery: true } }
    ).then((res) => res.url)
}