import { Router } from "express";
import { getItemsContent,addItems,deleteItems,validateAdminAndDeleteItem } from "../controller/itemcontroller.js";
import { getAddItemForm } from "../controller/formcontroller.js";

const itemsRouter = Router({mergeParams:true});

itemsRouter.param("categoryId",(req,res,next,value)=>{
    if(!/^[1-9]\d*$/.test(value)) {
        return res.status(400).send("Invalid category ID");
    }
    next();
});

itemsRouter.get("/",getItemsContent);
itemsRouter.get("/:categoryId/add",getAddItemForm);
itemsRouter.post("/:categoryId/add",addItems);
itemsRouter.get("/delete/:itemId",deleteItems);
itemsRouter.post("/delete/:itemId",validateAdminAndDeleteItem);

export default itemsRouter;