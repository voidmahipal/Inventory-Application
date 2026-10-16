import pool from "./pool.js";

async function getAllCategories() {
    const {rows} = await pool.query("SELECT * FROM category;");
    return rows;
}
async function getAllItems() {
    const {rows} = await pool.query("SELECT * FROM items;");
    return rows;
}
async function getItemsWithCategotyId(id) {
    const {rows} = await pool.query("SELECT * FROM items WHERE categoryId=($1);",[id]);
    return rows;
}
async function insertCategory(name) {
    await pool.query("INSERT INTO category(categoryname) VALUES ($1);",[name]);
}
async function insertItem({name,imgurl,description,quantity,categoryId}) {
    await pool.query("INSERT INTO items (itemname,imgurl,description,quantity,categoryid) VALUES ($1,$2,$3,$4,$5);",[name,imgurl,description,quantity,categoryId]);
}
async function checkIfCategoryExist(id) {
    const {rows} = await pool.query("SELECT * FROM category WHERE id=($1)",[id]);
    if(rows.length===0) {
        return false;
    }
    return true;
}
async function deleteFromDB(id) {
    await pool.query("DELETE FROM category WHERE id=$1",[id]);
}
async function checkIfItemExist(id) {
    const {rows} = await pool.query("SELECT * FROM items WHERE id=($1)",[id]);
    if(rows.length===0) {
        return false;
    }
    return true;
}
async function deleteItemFromDB(id) {
    const {rows} = await pool.query("SELECT * FROM items WHERE id=$1",[id]);
    const categoryId = rows[0].categoryid;
    await pool.query("DELETE FROM items WHERE id=$1",[id]);
    return categoryId;
}
export {getAllCategories,getAllItems,getItemsWithCategotyId,insertCategory,insertItem,checkIfCategoryExist,deleteFromDB,checkIfItemExist,deleteItemFromDB};