import { CreateClientController } from "../modules/clients/controllers/create-client-controller";
import { Router } from "express";
import { FindAllClientDeliveriesController } from "../modules/clients/controllers/find-all-client-deliveries-controller";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
clientsRoutes.post("/", createClientController.handle);

const findAllClientDeliveriesController = new FindAllClientDeliveriesController();
clientsRoutes.get("/deliveries", ensureAuthenticateClient, findAllClientDeliveriesController.handle);

export default clientsRoutes;
