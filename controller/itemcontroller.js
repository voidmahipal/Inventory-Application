import { getAllItems,insertItem,checkIfItemExist,deleteItemFromDB } from "../db/queries.js";

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

    let imgURL;
    try{
        imgURL = new URL(imgurl);
        if(!['http:','https:'].includes(imgURL.protocol)) {
            return res.status(404).send("Image url must start with http: or https:");
        }
    }
    catch {
        return res.status(404).send("Please enter a valid url");
    }
    try{
        await insertItem({name,imgurl,description,quantity,categoryId});
        res.redirect(`/category/${categoryId}`);
    }catch(err) {
        next(err);
    }
}
async function deleteItems(req,res,next) {
    
    const {itemId} = req.params;
    try{
        if(await checkIfItemExist(itemId)) {
            res.render("validateitem",{itemId:itemId});
        }
        else{
            res.send("No such category exists!!");
        }
    }catch(err) {
        next(err);
    }
}
async function validateAdminAndDeleteItem(req,res,next) {
    const {itemId} = req.params;
    const {password} = req.body;
    try{
        if(await checkIfItemExist(itemId)) {
            if(password===process.env.PASSWORD) {
                const categoryId = await deleteItemFromDB(itemId);
                res.redirect(`/category/${categoryId}`);
            }
            else{
                res.send("Wrong Password");
            }
        }
        else{
            res.send("Invalid item");
        }
    }
    catch(err) {
        next(err);
    }
}

export {getItemsContent,addItems,deleteItems,validateAdminAndDeleteItem};