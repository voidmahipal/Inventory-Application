import { checkIfCategoryExist } from "../db/queries.js";

function getAddCategoryForm(req,res) {
    res.render("addcategory");
}
async function getAddItemForm(req,res) {
    const {categoryId} = req.params;

    if(await checkIfCategoryExist(categoryId)) {
        res.render("additem",{categoryId:categoryId});
    }
    else{
        res.send("No such category exists!!");
    }
}
export {getAddCategoryForm,getAddItemForm};