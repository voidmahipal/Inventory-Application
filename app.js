import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/indexroute.js";
import categoryRouter from "./routes/categoryroute.js";
import itemsRouter from "./routes/itemsroute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({extended:true}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use("/",indexRouter);
app.use("/category",categoryRouter);
app.use("/items",itemsRouter);

app.listen(3000,(err)=>{
    if(err) {
        console.error(err);
        return;
    }
    console.log("Server is listening at port 3000");
});