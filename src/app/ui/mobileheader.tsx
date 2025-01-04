import { auth } from "../auth";
import MobileDrawer from "./drawers/mobiledrawer";

export default async function MobileHeader() {
    const session = await auth();
    if (session) {
        return (
            <MobileDrawer session={true}/>
        )
    } else {
        return (
            <MobileDrawer session={false}/>
        )
    }
}