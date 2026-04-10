import { useEffect, useRef } from "react";

export function Assignment4(){
      const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[inputRef])

    const handleClick = () => {
         inputRef.current.focus()
    }

    return(<div>
        <input ref={inputRef} type="text" placeholder="Enter text here"/>
        <button onClick={handleClick}>Focus input</button>
    </div>)
}