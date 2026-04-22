import "dotenv/config";
import { prisma } from "@repo/db";
import express from "express";

const app = express();
app.use(express.json());

// [] code has no way to check if the transaction is already "Success" before incrementing the balance. So if the same webhook fires twice, balance gets incremented twice.

//Because in [] form you are just passing a static list of queries — there is no function, no logic, no variables, nothing

//An array in JavaScript can only hold values, not logic

//By switching to a callback function instead of an array — because a function can contain logic

// app.post("/hdfcWebhook", async (req, res) => {
//     const paymentInformation = {
//         token: req.body.token,
//         userId: req.body.user_identifier,
//         amount: Number(req.body.amount),
//     };

//     try {
//         await prisma.$transaction([
            
//             prisma.balance.update({
//                 where: {
//                     userId: paymentInformation.userId
//                 },
//                 data: {
//                     amount: {
//                         increment: paymentInformation.amount
//                     }
//                 }
//             }),
//              prisma.onRampTransaction.update({
//                 where: {
//                     token: paymentInformation.token,
//                 },
//                 data: {
//                     status: "Success"
//                 }
//             })
//         ]);

//         res.status(200).json({
//             message: "captured"
//         })
//     }
//     catch (e) {
//        console.error(e);
//        res.status(500).json({
//         message: "Error while processing webhook"
//        })
       
//     }
// })



//Switch to callback form with tx so you can add the status check

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: Number(req.body.amount),
    };

    try {
        await prisma.$transaction(async (tx: prisma.TransactionClient) => {
            const onRampTxn = await tx.onRampTransaction.findUnique({
                where: { token: paymentInformation.token },
            });

            if (!onRampTxn || onRampTxn.status !== "Processing") {
                throw new Error("Transaction already processed or not found.");
            }

            await tx.balance.update({
                where: { userId: paymentInformation.userId },
                data: { amount: { increment: paymentInformation.amount } }
            });

            await tx.onRampTransaction.update({
                where: { token: paymentInformation.token },
                data: { status: "Success" }
            });
        });

        res.status(200).json({ message: "captured" });
    } catch (e) {
        console.error(e);
        res.status(411).json({ message: "Error while processing webhook" });
    }
});


app.listen(3003, () => {
  console.log("webhook server running on port 3003");
});