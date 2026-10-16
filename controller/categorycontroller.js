import "dotenv/config";
import { getAllCategories,getItemsWithCategotyId,insertCategory,checkIfCategoryExist,deleteFromDB } from "../db/queries.js";

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
        if(await checkIfCategoryExist(categoryId)) {
            const rows = await getItemsWithCategotyId(categoryId);
            res.render("itemsincategory",{rows:rows,categoryId:categoryId});
        } 
        else{
            res.send("No such category exists!!");
        }
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
async function deleteCategory(req,res,next) {
    
    const {categoryId} = req.params;
    try{
        if(await checkIfCategoryExist(categoryId)) {
            res.render("validatecategory",{categoryId:categoryId});
        }
        else{
            res.send("No such category exists!!");
        }
    }catch(err) {
        next(err);
    }
}
async function validateAdminAndDelete(req,res,next) {
    const {categoryId} = req.params;
    const {password} = req.body;
    try{
        if(await checkIfCategoryExist(categoryId)) {
            if(password===process.env.PASSWORD) {
                await deleteFromDB(categoryId);
                res.redirect("/category");
            }
            else{
                res.send("Wrong Password");
            }
        }
        else{
            res.send("Invalid category");
        }
    }
    catch(err) {
        next(err);
    }
}
export {getCategoryContent,getItemsInCategory,addCategory,deleteCategory,validateAdminAndDelete};