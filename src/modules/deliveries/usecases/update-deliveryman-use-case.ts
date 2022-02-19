import { prisma } from "../../../database/prisma-client";

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateDeliverymanUseCase.Request) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    });

    return result;
  }
}

export namespace UpdateDeliverymanUseCase {
  export interface Request {
    id_delivery: string;
    id_deliveryman: string;
  }
}
