import { getAllItems } from "../db/queries.js";

async function getItemsContent(req,res,next) {
    
    try{
        const rows = await getAllItems();
        res.render("items",{rows:rows});

    }catch(err){
        next(err);
    }
}

export {getItemsContent};