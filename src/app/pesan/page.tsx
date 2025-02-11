import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Order from "../ui/pages/order";

export default async function Pesan() {
    const session = await auth();
    if (!session) return redirect("/masuk");
    
    return (
        <Order/>
    )
}