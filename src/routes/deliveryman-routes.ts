import { Router } from "express";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateDeliverymanController } from "../modules/deliveryman/controllers/create-deliveryman-controller";
import { FindAllDeliverymanDeliveriesController } from "../modules/deliveryman/controllers/find-all-deliveryman-deliveries-controller";

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
deliverymanRoutes.post("/", createDeliverymanController.handle);

const findAllDeliverymanDeliveriesController = new FindAllDeliverymanDeliveriesController();
deliverymanRoutes.get("/deliveries", ensureAuthenticateDeliveryman, findAllDeliverymanDeliveriesController.handle);

export default deliverymanRoutes;
