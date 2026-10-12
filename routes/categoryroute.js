import { Router } from "express";
import { getCategoryContent,getItemsInCategory,addCategory } from "../controller/categorycontroller.js";
import { getAddCategoryForm } from "../controller/formcontroller.js";

const categoryRouter = Router({mergeParams:true});

categoryRouter.get("/",getCategoryContent);
categoryRouter.get("/add",getAddCategoryForm);
categoryRouter.post("/add",addCategory);
categoryRouter.get("/:categoryId",getItemsInCategory);

export default categoryRouter;