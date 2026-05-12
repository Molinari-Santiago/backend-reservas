import { Router } from "express";
import {
  crearMesa,
  obtenerMesas,
  obtenerMesasDisponibles
} from "../controllers/mesas.controller.js";

const router = Router();

router.post("/", crearMesa);
router.get("/", obtenerMesas);
router.get("/disponibles", obtenerMesasDisponibles);

export default router;