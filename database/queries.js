import pool from "./pool";

export async function categoryModel() {
    const { rows } = await pool.query(
        "SELECT * FROM categories ORDER BY NAME"
    );
    return rows
};