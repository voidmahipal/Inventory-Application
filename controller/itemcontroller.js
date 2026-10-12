import { getAllItems,insertItem } from "../db/queries.js";

async function getItemsContent(req,res,next) {
    
    try{
        const rows = await getAllItems();
        res.render("items",{rows:rows});

    }catch(err){
        next(err);
    }
}
async function addItems(req,res,next) {
    
    const {name,imgurl,description,quantity} = req.body;
    const {categoryId} = req.params;
    try{
        await insertItem({name,imgurl,description,quantity,categoryId});
        console.log("Redirecting to category:", categoryId);
        res.redirect(`/category/${categoryId}`);
    }catch(err) {
        next(err);
    }
}

export {getItemsContent,addItems};