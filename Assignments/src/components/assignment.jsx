import { useMemo, useState } from "react";


export const Assignment2 = () =>{
    const [items,setItems] = useState([
        {name:"item1",value:10},
        {name:"item2",value:20},
        {name:"item3",value:30},
        {name:"item4",value:40}
    ]);
    
    const totalValue = useMemo(()=>{
        let totalvalue = 0;
        for(let i=0;i<items.length;i++){
        totalvalue += items[i].value;

    }
    return totalvalue;
    },[items])

    return(
        <div>
            <ul>
                {items.map((item,index) => (
                    <li key={index}>{item.name}-price: Rs {item.value}</li>
                ))}
            </ul>
            <p>Total value: {totalValue}</p>
        </div>
    )


}