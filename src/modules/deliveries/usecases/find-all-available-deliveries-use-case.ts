import { prisma } from "../../../database/prisma-client";

export class FindAllAvailableDeliveriesUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        ended_at: null,
        id_deliveryman: null
      }
    });

    return deliveries;
  }
}
