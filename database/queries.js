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
};

export async function addMedicine(medicine){
    const {name, description, price, stock_quality, expiration_date, category_id, manufacturer_id} = medicine
    await pool.query(
        `INSERT INTO medicines (name, description, price, stock_quality, expiration_date, category_id, manufacturer_id)
        VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [name, description, price, stock_quality, expiration_date, category_id, manufacturer_id]
    )
}