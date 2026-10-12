import { Router } from "express";
import { getItemsContent,addItems } from "../controller/itemcontroller.js";
import { getAddItemForm } from "../controller/formcontroller.js";

const itemsRouter = Router({mergeParams:true});

itemsRouter.get("/",getItemsContent);
itemsRouter.get("/:categoryId/add",getAddItemForm);
itemsRouter.post("/:categoryId/add",addItems);

export default itemsRouter;