/*
  Warnings:

  - You are about to drop the column `amount` on the `food_details` table. All the data in the column will be lost.
  - Added the required column `price` to the `food_details` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_food_details" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "food_name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "calorie" INTEGER,
    "carbohydrate" INTEGER,
    "fat" INTEGER,
    "protein" INTEGER,
    "vitamin" TEXT
);
INSERT INTO "new_food_details" ("calorie", "carbohydrate", "fat", "food_name", "id", "protein", "vitamin") SELECT "calorie", "carbohydrate", "fat", "food_name", "id", "protein", "vitamin" FROM "food_details";
DROP TABLE "food_details";
ALTER TABLE "new_food_details" RENAME TO "food_details";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
