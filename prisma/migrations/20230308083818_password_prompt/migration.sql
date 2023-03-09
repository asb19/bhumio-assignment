-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passowordPrompted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "password" DROP NOT NULL;
