import { prisma } from "../../../database/prisma-client";

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: CreateDeliveryUseCase.Request) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client
      }
    });

    return delivery;
  }
}

export namespace CreateDeliveryUseCase {
  export interface Request {
    item_name: string;
    id_client: string;
  }
}
