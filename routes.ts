import { Router } from "express";
import clientsRoutes from "./src/routes/clients-routes";
import authenticateRoutes from "./src/routes/authenticate-routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/authenticate", authenticateRoutes);

export default routes;
