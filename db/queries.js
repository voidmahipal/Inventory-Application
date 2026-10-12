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

export {getAllCategories,getAllItems,getItemsWithCategotyId,insertCategory,insertItem};