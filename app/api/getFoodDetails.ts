import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export type foodData = Prisma.FoodDetailCreateInput[]


async function getFoodDetails() {
  const foodDetails : Prisma.FoodDetailCreateInput[] = await prisma.foodDetail.findMany();
  return foodDetails;
}

export { getFoodDetails,};
