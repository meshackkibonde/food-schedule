/*
  Warnings:

  - You are about to alter the column `carbohydrate` on the `food_details` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `fat` on the `food_details` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `protein` on the `food_details` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `amount` to the `food_details` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_food_details" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "food_name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
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
