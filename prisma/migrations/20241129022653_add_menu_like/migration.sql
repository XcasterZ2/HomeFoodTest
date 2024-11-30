-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "MenuLike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MenuLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MenuLike_userId_idx" ON "MenuLike"("userId");

-- CreateIndex
CREATE INDEX "MenuLike_menuId_idx" ON "MenuLike"("menuId");

-- CreateIndex
CREATE UNIQUE INDEX "MenuLike_userId_menuId_key" ON "MenuLike"("userId", "menuId");

-- AddForeignKey
ALTER TABLE "MenuLike" ADD CONSTRAINT "MenuLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuLike" ADD CONSTRAINT "MenuLike_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
