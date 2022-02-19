import { Router } from "express";
import { CreateDeliverymanController } from "../modules/deliveryman/controllers/create-deliveryman-controller";

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
deliverymanRoutes.post("/", createDeliverymanController.handle);

export default deliverymanRoutes;
