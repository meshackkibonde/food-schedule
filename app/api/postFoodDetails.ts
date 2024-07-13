import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postFoodDetails(foodDetails: any) {
  const foodDetail = await prisma.foodDetail.create({
    data: foodDetails
  });
}

export { postFoodDetails };
