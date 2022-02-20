import { prisma } from "../../../database/prisma-client";

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateEndDateUseCase.Request) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        ended_at: new Date()
      }
    });

    return result;
  }
}

export namespace UpdateEndDateUseCase {
  export interface Request {
    id_delivery: string;
    id_deliveryman: string;
  }
}
