import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count/>
      </CountContext.Provider>
    </div>
  ); 
}

function Count() {
  console.log("count is rerendered");
  
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  );
}
function CountRender() {
const {count} = useContext(CountContext);
  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
