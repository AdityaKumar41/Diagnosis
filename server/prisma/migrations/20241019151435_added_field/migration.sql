/*
  Warnings:

  - You are about to drop the column `reportAddress` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `hash` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "hash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "reportAddress";
