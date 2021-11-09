import { Router, Request, Response } from "express";
import { appointmentService } from "./services/AppointmentService";

export const routes = Router();

routes.get("/atendimentos/:id", appointmentService.listAService);

routes.get("/atendimentos/", appointmentService.listAllServices);

routes.post("/atendimentos", appointmentService.addAService);
