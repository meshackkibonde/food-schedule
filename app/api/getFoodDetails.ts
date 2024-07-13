import prisma from "@/lib/prisma";


async function getFoodDetails() {
  const foodDetails = await prisma?.foodDetail.findMany();
  return foodDetails;
}

export { getFoodDetails,};
