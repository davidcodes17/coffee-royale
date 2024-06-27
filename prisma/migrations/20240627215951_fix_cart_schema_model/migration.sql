/*
  Warnings:

  - You are about to drop the column `productId` on the `cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_productId_fkey`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `Transaction_cartId_fkey`;

-- DropIndex
DROP INDEX `Product_cartId_fkey` ON `product`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `productId`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
