import { Router } from "express";
import { getCategoryContent } from "../controller/categorycontroller.js";

const categoryRouter = Router();

categoryRouter.get("/",getCategoryContent);

export default categoryRouter;