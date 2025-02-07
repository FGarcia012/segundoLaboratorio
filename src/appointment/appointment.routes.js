import { Router } from "express";
import { getAppointment, saveAppointment, updateAppointment, cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, getAppointmentValidator, updateAppointmentValidator, cancelAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/getAppointment/:id", getAppointmentValidator, getAppointment);

router.patch("/updateAppointment/:id", updateAppointmentValidator, updateAppointment);

router.patch("/cancelAppointment/:id", cancelAppointmentValidator, cancelAppointment);

export default router;