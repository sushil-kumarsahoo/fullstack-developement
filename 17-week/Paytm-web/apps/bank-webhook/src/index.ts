import { prisma } from "@repo/db";
import express from "express";

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    };

    try {
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: paymentInformation.userId
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),
            await prisma.onRampTransaction.update({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: "success"
                }
            })
        ]);

        res.status(200).json({
            message: "captured"
        })
    }
    catch (e) {
       console.error(e);
       res.status(411).json({
        message: "Error while processing webhook"
       })
       
    }
})

app.listen(3003);