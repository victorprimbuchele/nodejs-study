-- CreateTable
CREATE TABLE "Atendimentos" (
    "id" SERIAL NOT NULL,
    "cliente" VARCHAR(50) NOT NULL,
    "pet" VARCHAR(20) NOT NULL,
    "servico" VARCHAR(50) NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "observacoes" TEXT,

    CONSTRAINT "Atendimentos_pkey" PRIMARY KEY ("id")
);
