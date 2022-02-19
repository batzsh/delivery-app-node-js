import { Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { CreateDeliveryController } from "../modules/deliveries/controllers/create-delivery-controller";
import { FindAllAvailableDeliveriesController } from "../modules/deliveries/controllers/find-all-available-deliveries-controller";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
deliveriesRoutes.post("/", ensureAuthenticateClient, createDeliveryController.handle);

const findAllAvailableDeliveriesController = new FindAllAvailableDeliveriesController();
deliveriesRoutes.get("/available", findAllAvailableDeliveriesController.handle);

export default deliveriesRoutes;
