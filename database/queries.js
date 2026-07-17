import pool from "./pool.js";

export async function categoryModel() {
    const { rows } = await pool.query(
        "SELECT * FROM categories ORDER BY NAME"
    );
    return rows
};

export async function medicinesModel() {
    const { rows } = await pool.query(
        "SELECT * FROM medicines ORDER BY NAME"
    );
    return rows
};

export async function getManuf(){
    const {rows} = await pool.query(
        "SELECT * FROM manufactorers ORDER BY NAME"
    );
    return rows
}