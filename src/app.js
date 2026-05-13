import express from "express";
import cors from "cors";

import mesasRoutes from "./routes/mesas.routes.js";
import reservasRoutes from "./routes/reservas.routes.js";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "API de reservas del restaurante funcionando correctamente"
  });
});

app.use("/api/mesas", mesasRoutes);
app.use("/api/reservas", reservasRoutes);
app.use("/api/productos", productosRoutes);

export default app;