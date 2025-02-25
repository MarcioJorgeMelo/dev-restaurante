import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";

const router = Router();

//-- User --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- Category --
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoriesController().handle);

export { router };
