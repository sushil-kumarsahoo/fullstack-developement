import axios from "axios";
import { atom, selector } from "recoil";


export const notificationsAtoms = atom({
    key: "networkAtom",
    default : selector({
        key:"networkSelector",
        get: async () => {
            // await new Promise(r => setTimeout(r, 5000))
            const res = await axios.get("http://localhost:3000/api/notifications")
            return res.data
        }
    })
})


// export const notificationsAtom = atom({
//     key: "networkAtom",
//     default: {
//         network:0,
//         jobs: 0,
//         messaging: 0,
//         notifications: 0
//     }
// });

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {


//    const { network, jobs, messaging, notifications } =
//   get(notificationsAtom);
// return network + jobs + messaging + notifications;

    const allNotifications = get(notificationsAtoms);

    return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications
    }
})


