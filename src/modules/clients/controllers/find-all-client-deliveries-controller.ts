import { Request, Response } from "express";
import { FindAllClientDeliveriesUseCase } from "../usecases/find-all-client-deliveries-use-case";

export class FindAllClientDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllClientDeliveriesUseCase = new FindAllClientDeliveriesUseCase();
    const deliveries = await findAllClientDeliveriesUseCase.execute(id_client);

    return response.json(deliveries);
  }
}
