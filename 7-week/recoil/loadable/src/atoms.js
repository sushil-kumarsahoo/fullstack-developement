import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios"


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