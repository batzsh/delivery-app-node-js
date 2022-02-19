import { prisma } from "../../../database/prisma-client";
import { hash } from "bcrypt";

export class CreateDeliverymanUseCase {
  async execute({ username, password }: CreateDeliverymanUseCase.Request) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: username
      }
    });

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists");
    }

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: await hash(password, 10)
      }
    });

    return deliveryman;
  }
}

export namespace CreateDeliverymanUseCase {
  export interface Request {
    username: string;
    password: string;
  }
}
