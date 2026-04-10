import { Client } from "pg";
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "sushil7847",
    port: 5433,
});
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to PostgreSQL...");
        await client.end();
    }
    catch (err) {
        console.error("Connection error!", err);
    }
}
connectDB();
//# sourceMappingURL=index.js.map