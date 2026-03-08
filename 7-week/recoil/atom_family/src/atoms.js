import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios"


// export const todosAtomFamily = atomFamily({
//     key: 'todosAtomFamily',
//     default: id => {
//         return TODOS.find(x => x.id === id)
//     },
// });

export const todoAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: "todoSelectFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`https://localhost:3000/todo${id}`);
            return res.data.todo;
        }
    })

})