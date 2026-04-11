import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";
export default async function USerpage(){
    const session = await getServerSession();
    return <div>
        user component
        <Appbar/>
       {JSON.stringify({session})}
    </div>
}