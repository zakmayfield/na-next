-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ref_key" ON "User"("ref");
