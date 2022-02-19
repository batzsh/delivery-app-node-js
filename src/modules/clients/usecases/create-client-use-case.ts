import { prisma } from "../../../database/prisma-client";
import { hash } from "bcrypt";

export class CreateClientUseCase {
  async execute({ username, password }: CreateClientUseCase.Request) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: username
      }
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const client = await prisma.clients.create({
      data: {
        username,
        password: await hash(password, 10)
      }
    });

    return client;
  }
}

export namespace CreateClientUseCase {
  export interface Request {
    username: string;
    password: string;
  }
}
