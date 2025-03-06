import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryControler } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { CloseOrderController } from "./controllers/order/CloseOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { DeleteItemController } from "./controllers/order/DeleteItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

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

//-- Product --
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryControler().handle
);

//-- Order --
router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new CloseOrderController().handle);

router.post("/order/add", isAuthenticated, new AddItemController().handle);

router.delete(
  "/order/remove",
  isAuthenticated,
  new DeleteItemController().handle
);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);

router.get("/orders", isAuthenticated, new ListOrdersController().handle);

export { router };
