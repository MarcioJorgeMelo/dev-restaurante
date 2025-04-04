"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoriesController_1 = require("./controllers/category/ListCategoriesController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const multer_2 = __importDefault(require("./config/multer"));
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const CloseOrderController_1 = require("./controllers/order/CloseOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const DeleteItemController_1 = require("./controllers/order/DeleteItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- User --
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/me", isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//-- Category --
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get("/category", isAuthenticated_1.isAuthenticated, new ListCategoriesController_1.ListCategoriesController().handle);
//-- Product --
router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get("/category/product", isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryControler().handle);
//-- Order --
router.post("/order", isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete("/order", isAuthenticated_1.isAuthenticated, new CloseOrderController_1.CloseOrderController().handle);
router.post("/order/add", isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete("/order/remove", isAuthenticated_1.isAuthenticated, new DeleteItemController_1.DeleteItemController().handle);
router.put("/order/send", isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get("/orders", isAuthenticated_1.isAuthenticated, new ListOrdersController_1.ListOrdersController().handle);
router.get("/order/detail", isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put("/order/finish", isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
