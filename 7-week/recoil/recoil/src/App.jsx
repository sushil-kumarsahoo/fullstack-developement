import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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
  const count = useRecoilValue(countAtom);
  return <div>{count}
  <EvenCountRenderer/>
  </div>;
  
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
return <div>
   {isEven ? " it is even" : "it is odd"}
</div>
}


function Button() {
  const setCount = useSetRecoilState (countAtom);
  console.log("buttons rerender");
  
  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
