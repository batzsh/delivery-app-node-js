import { Request, Response } from "express";
import { FindAllDeliverymanDeliveriesUseCase } from "../usecases/find-all-deliveryman-deliveries-use-case";

export class FindAllDeliverymanDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliverymanDeliveriesUseCase = new FindAllDeliverymanDeliveriesUseCase();
    const deliveries = await findAllDeliverymanDeliveriesUseCase.execute(id_deliveryman);

    return response.json(deliveries);
  }
}
