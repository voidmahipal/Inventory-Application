function getAddCategoryForm(req,res) {
    res.render("addcategory");
}
function getAddItemForm(req,res) {
    const {categoryId} = req.params
    res.render("additem",{categoryId:categoryId});
}
export {getAddCategoryForm,getAddItemForm};