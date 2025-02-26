import { Request, Response } from "express";
import { CloseOrderService } from "../../services/order/CloseOrderService";

class CloseOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const remove_order = new CloseOrderService();

    const order = remove_order.execute({
      order_id,
    });

    return res.json(order);
  }
}

export { CloseOrderController };
