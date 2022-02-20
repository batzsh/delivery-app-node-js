import { Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateDeliveryController } from "../modules/deliveries/controllers/create-delivery-controller";
import { FindAllAvailableDeliveriesController } from "../modules/deliveries/controllers/find-all-available-deliveries-controller";
import { UpdateDeliverymanController } from "../modules/deliveries/controllers/update-deliveryman-controller";
import { UpdateEndDateController } from "../modules/deliveries/controllers/update-end-date-controller";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
deliveriesRoutes.post("/", ensureAuthenticateClient, createDeliveryController.handle);

const findAllAvailableDeliveriesController = new FindAllAvailableDeliveriesController();
deliveriesRoutes.get("/available", ensureAuthenticateDeliveryman, findAllAvailableDeliveriesController.handle);

const updateDeliverymanController = new UpdateDeliverymanController();
deliveriesRoutes.put("/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

const updateEndDateController = new UpdateEndDateController();
deliveriesRoutes.put("/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);

export default deliveriesRoutes;
