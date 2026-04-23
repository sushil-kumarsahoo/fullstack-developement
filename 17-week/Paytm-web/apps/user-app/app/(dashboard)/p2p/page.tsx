import { P2PTransactions } from "../../../components/P2PTransfers";
import { SendCard } from "../../../components/SendCard";
import { getP2PTransfers } from "../../lib/actions/p2pTransfer";


export default async function p2pPage(){
    const transfers = await getP2PTransfers();
    return <div className="w-full flex justify-center gap-4 p-4">
        <div className="flex-1 max-w-md">
            <SendCard/>
        </div>
        <div className="flex-1 max-w-md">
            <P2PTransactions transfers={transfers}/>
        </div>
    </div>
}