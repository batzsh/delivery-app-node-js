import { Router } from "express";
import clientsRoutes from "./src/routes/clients-routes";
import deliverymanRoutes from "./src/routes/deliveryman-routes";
import deliveriesRoutes from "./src/routes/deliveries-routes";
import authenticateRoutes from "./src/routes/authenticate-routes";

const routes = Router();

routes.use("/client", clientsRoutes);
routes.use("/deliveryman", deliverymanRoutes);
routes.use("/delivery", deliveriesRoutes);
routes.use("/", authenticateRoutes);

export default routes;
