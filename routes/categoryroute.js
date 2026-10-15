import { Router } from "express";
import { getCategoryContent,getItemsInCategory,addCategory } from "../controller/categorycontroller.js";
import { getAddCategoryForm } from "../controller/formcontroller.js";

const categoryRouter = Router({mergeParams:true});

categoryRouter.param("categoryId",(req,res,next,value)=>{
    if(!/^[1-9]\d*$/.test(value)) {
        return res.status(400).send("Invalid category ID");
    }
    next();
});

categoryRouter.get("/",getCategoryContent);
categoryRouter.get("/add",getAddCategoryForm);
categoryRouter.post("/add",addCategory);
categoryRouter.get("/:categoryId",getItemsInCategory);

export default categoryRouter;