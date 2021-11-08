import { Router } from "express";
import { appointmentService } from "./services/AppointmentService";

export const routes = Router();

routes.get("/atendimentos", (req, res) => {
  return res.json({ hello: "world" });
});

routes.post("/atendimentos", appointmentService.execute);
