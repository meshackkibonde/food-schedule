-- CreateTable
CREATE TABLE "food_details" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "calorie" DOUBLE PRECISION,
    "carbohydrate" DOUBLE PRECISION,
    "fat" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "vitamin" TEXT,

    CONSTRAINT "food_details_pkey" PRIMARY KEY ("id")
);
