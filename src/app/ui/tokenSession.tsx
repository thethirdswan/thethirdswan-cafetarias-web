import { SessionProvider } from "next-auth/react";
import NotificationButton from "./requestnotif";
import { auth } from "../../../auth";

export default async function TokenSession() {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <NotificationButton/>
        </SessionProvider>
    )
}