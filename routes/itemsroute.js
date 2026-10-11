import { Router } from "express";
import { getItemsContent } from "../controller/itemcontroller.js";

const itemsRouter = Router();

itemsRouter.get("/",getItemsContent);

export default itemsRouter;