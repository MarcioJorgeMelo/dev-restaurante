import { Request, Response } from "express";
import { DeleteItemService } from "../../services/order/DeleteItemService";

class DeleteItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const deleteItem = new DeleteItemService();

    const order = await deleteItem.execute({
      item_id,
    });

    return res.json(order);
  }
}

export { DeleteItemController };
