import { Router } from "express";
import clientsRoutes from "./src/routes/clients-routes";

const routes = Router();

routes.use("/clients", clientsRoutes);

export default routes;
