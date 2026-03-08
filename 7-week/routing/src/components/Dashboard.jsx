
export default function DashBoard() { 
    return(
       <div>
        Dashboard page 
        <Boldify>
            hi there
        </Boldify>
       </div>
    )
}

function Boldify({children}){
  return <b>
    {children}</b>
}