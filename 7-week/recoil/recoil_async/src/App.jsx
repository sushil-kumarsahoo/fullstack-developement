import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'

import { notificationsAtoms, totalNotificationSelector } from './store/atoms/atoms';
function App() {
  

  return (
   <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
   </>
  )
}

function MainApp(){
  const [networkCount,] = useRecoilState(notificationsAtoms);
  const totoalNotificationCount  = useRecoilValue(totalNotificationSelector);

  // useEffect( () => {
  //  axios.get("http://localhost:3000/api/notifications")
  //  .then(res => {
  //   setNetworkCount(res.data)
  //  })
  // }, [])  

 return (
  <>
     <button>Home</button>
      <button>
        My network (
        {networkCount.network>= 100 ? "99+" : networkCount.network })
      </button>
      <button>jobs {networkCount.jobs}</button>
      <button>Notifications {networkCount.notifications}</button>
      <button >Messaging {networkCount.messaging}</button>
      <button onClick={()=>{
        
      }}>Me {totoalNotificationCount}</button>
  </>
 )


}



export default App
