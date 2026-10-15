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

export {getItemsContent,addItems};