-- CreateTable
CREATE TABLE "tb_pengguna" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_pengguna_pkey" PRIMARY KEY ("id")
);
