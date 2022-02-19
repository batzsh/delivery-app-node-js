import { Router } from "express";
import clientsRoutes from "./src/routes/clients-routes";
import deliverymanRoutes from "./src/routes/deliveryman-routes";
import authenticateRoutes from "./src/routes/authenticate-routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/deliveryman", deliverymanRoutes);
routes.use("/", authenticateRoutes);

export default routes;
