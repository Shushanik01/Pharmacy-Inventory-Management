import pool from "./pool.js";

async function seed() {
    await pool.query(`
        INSERT INTO categories (name, description)
        VALUES
        ('Pain Relief', 'Medicines for pain relief'),
        ('Antibiotics', 'Medicines for bacterial infections'),
        ('Vitamins', 'Vitamin supplements');
    `);

    await pool.query(`
        INSERT INTO manufactorers (name, country)
        VALUES
        ('Pfizer', 'USA'),
        ('Bayer', 'Germany');
    `);

    await pool.query(`
        INSERT INTO medicines (
            name,
            description,
            price,
            stock_quantity,
            expiration_date,
            category_id,
            manufacturer_id
        )
        VALUES
        (
            'Paracetamol',
            'Pain relief tablets',
            5.99,
            100,
            '2027-12-31',
            1,
            1
        );
    `);

    console.log("Database seeded!");

    await pool.end();
}

seed();