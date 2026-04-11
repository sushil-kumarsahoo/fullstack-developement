import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";
import { NEXT_AUTH } from "@/app/lib/auth";
export default async function USerpage(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        user component
        <Appbar/>
       {JSON.stringify({session})}
    </div>
}