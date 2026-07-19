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
    const {name, description, price, stock_quantity, expiration_date, category_id, manufacturer_id} = medicine
    await pool.query(
        `INSERT INTO medicines (name, description, price, stock_quantity, expiration_date, category_id, manufacturer_id)
        VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [name, description, price, stock_quantity, expiration_date, category_id, manufacturer_id]
    )
};

export async function deleteMedicine(id){
    await pool.query(
        `DELETE FROM medicines WHERE id =  ANY($1)`,
        [id]
    )
};

export async function getMedicineById(id){
    const {rows} = await pool.query(
        `SELECT * FROM medicines WHERE id = $1`,
        [id]
    );
    return rows[0]
};

export async function updateMedicine(id, medicine){
    const {name, description, price, stock_quantity, expiration_date, category_id, manufacturer_id} = medicine
    await pool.query(
        `UPDATE medicines
        SET name = $1, description = $2, price = $3,
        stock_quantity = $4, expiration_date = $5, category_id = $6,
        manufacturer_id = $7 WHERE id = $8
        `,
        [name, description, price, stock_quantity, expiration_date, category_id, manufacturer_id, id]
    )
}