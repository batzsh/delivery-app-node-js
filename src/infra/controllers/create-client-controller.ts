import { CreateClientUseCase } from "../../domains/clients/usecases/create-client-use-case";
import { Request, Response } from "express";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username,
      password
    });

    return response.json(result);
  }
}
