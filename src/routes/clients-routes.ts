import { CreateClientController } from "../modules/clients/controllers/create-client-controller";
import { Router } from "express";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
clientsRoutes.post("/", createClientController.handle);

export default clientsRoutes;
