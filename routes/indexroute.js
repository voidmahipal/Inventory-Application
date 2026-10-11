import { Router } from "express";
import { getIndexContent } from "../controller/indexcontroller.js";

const indexRouter = Router();

indexRouter.get("/",getIndexContent);

export default indexRouter;