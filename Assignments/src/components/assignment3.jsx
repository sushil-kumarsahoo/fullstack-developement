import { memo, useCallback, useState } from "react";


export function Assignment3(){
    const [count,setCount] = useState(0);

    const handleIncrement = useCallback(()=>{
        setCount(function(currentcount){
            return currentcount + 1;
        })
    },[])

const handleDecrement = useCallback(()=>{
    setCount(function(currentcount){
        return currentcount - 1;
    })
},[])

return( <div>
    <p>Count: {count}</p>
    <CounterButton onIncreament={handleIncrement} onDecrement={handleDecrement}/>

</div>);
};

const CounterButton = memo(({onIncreament,onDecrement}) => {
    return(<div>
        <button onClick={onIncreament}>Increament</button>
        <button onClick={onDecrement}>Decreament</button>
    </div>)
})

