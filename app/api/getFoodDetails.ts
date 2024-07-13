import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function getFoodDetails() {
  const foodDetails = await prisma.foodDetail.findMany();
  return foodDetails;
}

export { getFoodDetails,};
