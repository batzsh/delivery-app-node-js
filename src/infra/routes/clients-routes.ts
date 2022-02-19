import { CreateClientController } from "../controllers/create-client-controller";
import { Router } from "express";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
clientsRoutes.post("/client/", createClientController.handle);

export default clientsRoutes;
