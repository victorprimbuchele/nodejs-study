import { Router, Request, Response } from "express";
import { appointmentService } from "./services/AppointmentService";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const routes = Router();

routes.get("/atendimentos/:id", appointmentService.listAService);

routes.get("/atendimentos/", appointmentService.listAllServices);

routes.post("/atendimentos", appointmentService.addAService);

routes.patch("/atendimentos/:id", appointmentService.updateAService);

routes.delete("/atendimentos/:id", appointmentService.deleteAService);
