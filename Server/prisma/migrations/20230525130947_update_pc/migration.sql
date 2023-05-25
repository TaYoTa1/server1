/*
  Warnings:

  - Made the column `motherboard` on table `PC` required. This step will fail if there are existing NULL values in that column.
  - Made the column `processor` on table `PC` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videocard` on table `PC` required. This step will fail if there are existing NULL values in that column.
  - Made the column `RAM` on table `PC` required. This step will fail if there are existing NULL values in that column.
  - Made the column `keyboard` on table `PC` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monitor` on table `PC` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_userId_fkey";

-- AlterTable
ALTER TABLE "PC" ALTER COLUMN "motherboard" SET NOT NULL,
ALTER COLUMN "processor" SET NOT NULL,
ALTER COLUMN "videocard" SET NOT NULL,
ALTER COLUMN "RAM" SET NOT NULL,
ALTER COLUMN "keyboard" SET NOT NULL,
ALTER COLUMN "monitor" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
