import { PrismaClient } from "./generated/prisma/client.js";

const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    accelerateUrl: undefined as any
  });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;