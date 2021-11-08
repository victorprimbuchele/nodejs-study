import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { datatimeFormat } from "../utils/DateTimeFormat";

const prisma = new PrismaClient();

class AppointmentService {
  async execute(request: Request, response: Response) {
    try {
      const { cliente, pet, servico, status, observacoes, data } = request.body;
      const date = await datatimeFormat.execute(data);

      await prisma.atendimentos.create({
        data: {
          cliente: cliente,
          pet: pet,
          servico: servico,
          status: status,
          observacoes: observacoes,
          dataConsulta: date,
        },
      });

      return response.json({
        status: 201,
        message: "Consulta cadastrada com sucesso!",
      });
    } catch (error) {
      return response.json({
        status: 400,
        message: `Ocorreu um erro ${error}`,
      });
    }
  }
}

export const appointmentService = new AppointmentService();
