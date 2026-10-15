import { getAllCategories,getItemsWithCategotyId,insertCategory } from "../db/queries.js";

async function getCategoryContent(req,res,next) {
    
    try{
        const rows = await getAllCategories();
        res.render("category",{rows:rows});
    }
    catch(err){
        next(err);
    }
}
async function getItemsInCategory(req,res,next) {
    
    const {categoryId} = req.params; 
    try{
        const rows = await getItemsWithCategotyId(categoryId);
        res.render("itemsincategory",{rows:rows,categoryId:categoryId});
    }
    catch(err) {
        next(err);
    }
}
async function addCategory(req,res,next) {
    
    const {name} = req.body;
    try{
        await insertCategory(name);
        res.redirect("/category");
    }catch(err) {
        next(err);
    }
}

export {getCategoryContent,getItemsInCategory,addCategory};