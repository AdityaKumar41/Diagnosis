/*
  Warnings:

  - The primary key for the `Doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `web3address` on the `Doctor` table. All the data in the column will be lost.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `web3address` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `address` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_pkey",
DROP COLUMN "id",
DROP COLUMN "web3address",
ADD COLUMN     "address" TEXT NOT NULL,
ADD CONSTRAINT "Doctor_pkey" PRIMARY KEY ("address");

-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
DROP COLUMN "id",
DROP COLUMN "web3address",
ADD COLUMN     "address" TEXT NOT NULL,
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("address");
