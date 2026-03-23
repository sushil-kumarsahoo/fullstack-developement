import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ 
  connectionString: process.env["DATABASE_URL"] 
});
const prisma =  new PrismaClient({adapter});

async function insertUser(username:string, password: string, firstName:string,lastName:string, email:string){
  const response = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(response);
    
}
// insertUser('sushilkumar','sushil7867','sushilkumar','kumar','sushilkumare@gmail.com')

async function addTodo(usrId:number) {
 const response =   await prisma.todo.create({
        data: {
            title: "learn prisma",
            description: 'learn prisma with typescript',
            userId:usrId
        }
    })
   console.log(response);
   
}

//addTodo(100);

async function getTodos(userId: number){
 const response =  prisma.todo.findMany({
        where:{
            userId: userId
        }
    })
    console.log(response);
    
}

//getTodos(1);

async function getTodosUserDetails(userId: number){
    const response = await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            id: true,
            title:true,
            description:true,
            user:true
        }
    })
    console.log(response);
    
}

//getTodosUserDetails(1);
