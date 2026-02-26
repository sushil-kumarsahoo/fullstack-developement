import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ['info', 'query'], });
async function main() {
    await prisma.post.create({
        data: {
            title: "titlke of post",
            content: "asfdg",
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    });
}
main();
//# sourceMappingURL=create-post.js.map