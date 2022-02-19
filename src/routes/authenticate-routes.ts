import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/controllers/authenticate-client-controller";

const authenticateRoutes = Router();

const authenticateClientController = new AuthenticateClientController();
authenticateRoutes.post("/", authenticateClientController.handle);

export default authenticateRoutes;
