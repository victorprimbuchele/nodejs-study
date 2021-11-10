import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

import { datatimeValidation } from "../utils/DateTimeValidation";
import { clientValidation } from "../utils/ClientValidation";

const prisma = new PrismaClient();

class AppointmentService {
  async addAService(request: Request, response: Response) {
    try {
      const { cliente, pet, servico, status, observacoes, dataConsulta } =
        request.body;

      const nome = clientValidation.validate(cliente);

      const date = await datatimeValidation.validate(dataConsulta);

      await prisma.atendimentos.create({
        data: {
          cliente: nome,
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

  async listAService(request: Request, response: Response) {
    try {
      const id: any = request.params.id;
      const service = await prisma.atendimentos.findUnique({
        where: { id: parseInt(id) },
      });

      return response.json({
        status: 201,
        message: "Busca realizada com sucesso",
        data: service,
      });
    } catch (error) {
      return response.json({
        status: 400,
        message: `Ocorreu um erro ${error}`,
      });
    }
  }

  async listAllServices(request: Request, response: Response) {
    try {
      const services = await prisma.atendimentos.findMany();
      return response.json({
        status: 201,
        message: "Busca realizada com sucesso",
        data: services,
      });
    } catch (error) {
      return response.json({
        status: 400,
        message: `Ocorreu um erro ${error}`,
      });
    }
  }

  async updateAService(request: Request, response: Response) {
    try {
      const id: any = request.params.id;
      const { cliente, pet, servico, status, observacoes, dataConsulta } =
        request.body;

      const nome = clientValidation.validate(cliente);

      const date = await datatimeValidation.validate(dataConsulta);

      const service = await prisma.atendimentos.update({
        where: { id: parseInt(id) },
        data: {
          cliente: nome,
          pet: pet,
          servico: servico,
          status: status,
          observacoes: observacoes,
          dataConsulta: date,
        },
      });
      return response.json({
        status: 201,
        message: "Busca realizada com sucesso",
        data: service,
      });
    } catch (error) {
      return response.json({
        status: 400,
        message: `Ocorreu um erro ${error}`,
      });
    }
  }

  async deleteAService(request: Request, response: Response) {
    try {
      const id: any = request.params.id;
      console.log(id);

      const service = await prisma.atendimentos.delete({
        where: { id: Number(id) },
      });

      return response.json({
        status: 201,
        message: `O serviço do cliente ${service.cliente} excluído com sucesso`,
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
