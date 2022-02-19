import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/controllers/authenticate-client-controller";
import { AuthenticateDeliverymanController } from "../modules/account/controllers/authenticate-deliveryman-controller";

const authenticateRoutes = Router();

const authenticateClientController = new AuthenticateClientController();
authenticateRoutes.post("/clients/authenticate", authenticateClientController.handle);

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
authenticateRoutes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

export default authenticateRoutes;
