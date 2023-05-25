-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberPhone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "jobPlace" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PC" (
    "id" TEXT NOT NULL,
    "motherboard" TEXT,
    "processor" TEXT,
    "videocard" TEXT,
    "RAM" TEXT,
    "keyboard" TEXT,
    "monitor" TEXT,
    "userId" TEXT,

    CONSTRAINT "PC_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
