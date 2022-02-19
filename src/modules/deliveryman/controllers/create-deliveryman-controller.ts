import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "../usecases/create-deliveryman-use-case";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username,
      password
    });

    return response.json(result);
  }
}
