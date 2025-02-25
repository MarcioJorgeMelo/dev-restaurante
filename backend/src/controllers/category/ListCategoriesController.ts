import { Request, Response } from "express";
import { ListCategoriesService } from "../../services/category/ListCategoriesService";

class ListCategoriesController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoriesService();

    const categories = await listCategoryService.execute();

    return res.json(categories);
  }
}

export { ListCategoriesController };
