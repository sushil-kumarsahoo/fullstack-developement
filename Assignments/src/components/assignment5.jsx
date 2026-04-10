import { useEffect, useRef, useState } from "react";

export function Assignment5(){

    const[,forceRender] = useState(0);
    const renderCount = useRef(0);
   
    const handleRerender = () => {
        forceRender(Math.random());
    };
    useEffect(()=> {
        renderCount.current+=1;
    })

   

    return(<div>
      <p>This component has rendered {renderCount.current}  times</p>   
      <button onClick={handleRerender}>Force Re-render</button>
    </div>)
}