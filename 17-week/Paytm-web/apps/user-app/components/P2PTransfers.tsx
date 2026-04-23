import { Card } from "@repo/ui/card";

export function P2PTransactions({transfers}:{transfers : {
    amount : number;
    timestamp : Date;
    toUserName : string;
}[]}){
    if(!transfers.length){
        return <Card title="Recent Transfers">
            <div className="text-center pb-8 pt-8">
                No recent transfers
            </div>
        </Card>
    }
    return <Card title="Recent Transfers">
        <div className="pt-2">
            {transfers.map((t,index) => (
                <div key={index} className="flex justify-between py-2">
                    <div>
                        <div className="text-sm font-medium">
                            Sent to {t.toUserName}
                        </div>
                        <div className="text-slate-600 text-xs">
                            {new Date(t.timestamp).toDateString()}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-red-500">
                        -Rs {t.amount / 100}
                    </div>
                </div>
            ))}
        </div>
    </Card>
}