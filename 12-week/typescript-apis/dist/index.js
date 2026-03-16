"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function updateUser(updateProps) {
}
function updateUser2(UpdatePropsOptional) {
}
const user = {
    name: 'john',
    age: 25,
};
const users = {
    "ras@qd1": {
        id: 'ras@qd1',
        username: 'harkirat'
    },
    "ras1dr@": {
        id: 'rasdr@',
        username: 'raman'
    },
};
//map
const users1 = new Map();
users1.set("qd1ras@", { name: "sush", age: 30, email: "ras@qd" });
users1.set("sarah@dqeyt", { name: "sarah", age: 32, email: "sarwjdh@" });
const user4 = users1.get("qd1ras@");
console.log(user4);
users1.delete("qd1ras@");
//# sourceMappingURL=index.js.map