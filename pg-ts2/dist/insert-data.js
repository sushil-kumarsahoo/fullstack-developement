import { client } from "./connection.js";
async function connectToDatabase() {
    await client.connect();
    console.log("Connected to database");
}
async function createUserTable() {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log("Table created:", result);
}
async function insertUser(username, name, email, password) {
    const result = await client.query(`
        INSERT INTO users (username, name, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `, [username, name, email, password]);
    console.log("User inserted:", result.rows[0]);
}
async function deleteUser(email) {
    const result = await client.query(`
        DELETE FROM users WHERE email = $1 RETURNING *
    `, [email]);
    console.log("User deleted:", result.rows[0]);
}
async function getUsers() {
    const result = await client.query(`SELECT * FROM users`);
    console.log("Users:", result.rows);
}
connectToDatabase()
    .then(async () => {
    await createUserTable();
    await insertUser("sushil", "sahoo", "sushil@gmail.com", "12345");
    // await deleteUser("anshu2@gmail.com");
    // await getUsers();
})
    .catch((error) => {
    console.error("Error:", error);
})
    .finally(async () => {
    await client.end();
});
//# sourceMappingURL=insert-data.js.map