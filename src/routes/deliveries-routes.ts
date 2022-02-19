import { Router } from "express";
import { CreateDeliveryController } from "../modules/deliveries/controllers/create-delivery-controller";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
deliveriesRoutes.post("/", createDeliveryController.handle);

export default deliveriesRoutes;
