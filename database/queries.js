import pool from "./pool.js";

export async function categoryModel() {
    const { rows } = await pool.query(
        "SELECT * FROM categories ORDER BY NAME"
    );
    return rows
};