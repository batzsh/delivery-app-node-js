import { prisma } from "../../../database/prisma-client";

export class FindAllAvailableDeliveriesUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        ended_at: null
      }
    });

    return deliveries;
  }
}
