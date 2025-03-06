import prismaClient from "../../prisma";

interface DeleteItemRequest {
  item_id: string;
}

class DeleteItemService {
  async execute({ item_id }: DeleteItemRequest) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { DeleteItemService };
