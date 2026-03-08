import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']})


//SELECT * FROM question OFFSET 0 LIMIT 10;
//SELECT * FROM question OFFSET 10 LIMIT 10;
//SELECT * FROM question OFFSET 20 LIMIT 10;


async function main(){
    let res = await prisma.user.findMany({
        take:3,
        skip:10 
    })
    console.log(res);
}

main();

prisma.$on("query", async(e)=>{
    console.log(`${e.query} ${e.params}`);
    
})