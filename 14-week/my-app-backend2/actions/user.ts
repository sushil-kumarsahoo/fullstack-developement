"use server";
import { prisma } from '@/lib/prisma';

export async function signup(email:string, password:string) {
    try {
        await prisma.user.create({
            data: {
                email: email,
                password:password
            }
        })
        return true
    }
    catch (e) {
       return false
    }

}