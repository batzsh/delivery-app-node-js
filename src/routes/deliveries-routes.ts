import { Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { CreateDeliveryController } from "../modules/deliveries/controllers/create-delivery-controller";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
deliveriesRoutes.post("/", ensureAuthenticateClient, createDeliveryController.handle);

export default deliveriesRoutes;
