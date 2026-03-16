

interface User{
    id:string;
    name:string;
    age: number;
    email:string;
    password:string;
};

//pick allows you to create a new typre by selecting a set of properties from an existing type(Type)

type updateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(updateProps: updateProps){

}

//Partial makes of all properties of a type optional, creating a type with the same properties, but each marked as optional

type UpdatePropsOptional = Partial<updateProps>

function updateUser2(UpdatePropsOptional:UpdatePropsOptional){

}

//Readnly

type User1 = {
   readonly name:string;
   readonly age:number; 
}

const user:User1 = {
    name:'john',
    age:25,
}

//user.name = "asd";


//Record and Map 

type User2 = {
    id: string;
    username: string;
}

// type Users = {
//     [key : string] :User2;
// } or

type Users = Record<string, number>; 

const users = {
  "ras@qd1":{
    id: 'ras@qd1',
    username:'harkirat'
  },
  "ras1dr@":{
    id:'rasdr@',
    username: 'raman'
  },
}

//map

type User4 = {
    name: string;
    age:number;
    email:string;
}

const users1 = new Map<string,User4>()
users1.set("qd1ras@", { name:"sush", age:30, email: "ras@qd"}) 
users1.set("sarah@dqeyt", {name: "sarah", age:32, email:"sarwjdh@"})

const user4 = users1.get("qd1ras@")
console.log(user4);

users1.delete("qd1ras@")

//Exclude 

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

//handleEvent('scroll'); 
handleEvent('click'); 


//Type infernece in zod

import {z} from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
    name:z.string().min(1, {message:"name cannot be empty"}),
    email:z.string().email({message:"invalid email format"}),
    age:z.number().min(18,{message:"you must be atleast 18 years old"}).optional(),
});

// type FinalUserSchema = {
//      name: string;
//      email:string;
//      age?:number;
// }

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req,res) => {
    const { success} = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;

    if(!success) {
        res.status(411).json({});
        return
    }
    res.json({
        message:"user updated"
    })
});

app.listen(3000);