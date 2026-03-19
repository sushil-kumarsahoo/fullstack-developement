import dotenv from 'dotenv';
import { rmSync } from 'node:fs';
import { Client } from 'pg';
dotenv.config();
const client = new Client({
    connectionString: process.env.DATABASE_URL
});
async function createUserTable() {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users2(
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT     CURRENT_TIMESTAMP);`);
}
async function createAddressTable() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS addresses(
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            street VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(100) NOT NULL,
            pincode VARCHAR(20) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
        )
    `);
    console.log('addresses table created!');
}
async function insertData(username, password, email) {
    const result1 = await client.query(`
    INSERT INTO users2(username,password,email)
    VALUES($1,$2,$3)`, [username, password, email]);
    console.log(result1);
}
async function insertAddress(user_id, street, city, state, pincode) {
    await client.query(`
        INSERT INTO addresses(user_id, street, city, state, pincode)
        VALUES($1, $2, $3, $4, $5)
    `, [user_id, street, city, state, pincode]);
    console.log('address inserted!');
}
async function main() {
    try {
        await client.connect();
        await createUserTable();
        await createAddressTable();
        await insertData('soumupr', 'soumyu78', 'soumyupr@gmail.com');
        await insertAddress(1, 'MG Road', 'Bhubaneswar', 'Odisha', '751001');
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.end();
    }
}
main();
//# sourceMappingURL=index.js.map