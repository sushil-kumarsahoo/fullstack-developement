"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import {prisma} from '@repo/db'
import { revalidatePath } from "next/cache";


export async function createOnRampTransaction(amount:number,provider:string){
    const token = Math.random().toString();
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if(!userId){
        return {
            message: "user not logged in"
        }
    }
   await prisma.onRampTransaction.create({
        data:{
           userId:Number(userId),
           amount : amount * 100,
           status:"Processing",
           startTime: new Date(),
           provider,
           token:token,
        }
    });
 
     revalidatePath("/transfer");

    return {
        message : "on ramp transaction added"
    }

}