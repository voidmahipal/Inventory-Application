import pool from "./pool.js";

async function getAllCategories() {
    const {rows} = await pool.query("SELECT * FROM category;");
    return rows;
}
async function getAllItems() {
    const {rows} = await pool.query("SELECT * FROM items;");
    return rows;
}

export {getAllCategories,getAllItems};