import { PrismaClient, Prisma } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
  }

if (process.env.NOD_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
