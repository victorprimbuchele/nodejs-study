/*
  Warnings:

  - You are about to drop the column `data` on the `Atendimentos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Atendimentos" DROP COLUMN "data",
ADD COLUMN     "dataConsulta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
