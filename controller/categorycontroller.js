import { getAllCategories } from "../db/queries.js";

async function getCategoryContent(req,res,next) {
    
    try{
        const rows = await getAllCategories();
        res.render("category",{rows:rows});
    }
    catch(err){
        next(err);
    }
}

export {getCategoryContent};