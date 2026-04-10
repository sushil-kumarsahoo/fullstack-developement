import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atmos";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom);
   const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>jobs {jobsAtomCount}</button>
      <button>Notifications {messagingAtomCount}</button>
      <button >Messaging {notificationsAtomCount}</button>
      <button onClick={()=>{
        setMessagingAtomCount(c => c + 1)
      }}>Me {totalNotificationCount}</button>
    </>
  );  
}

export default App;
