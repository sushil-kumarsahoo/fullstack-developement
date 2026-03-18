import dotenv from 'dotenv';
import { rmSync } from 'node:fs';
import {Client} from 'pg';
dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function createUserTable(){
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users2(
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT     CURRENT_TIMESTAMP);`
        )}

async function insertData(username:string, password:string, email:string){
    const result1 = await client.query(`
    INSERT INTO users2(username,email,password)
    VALUES('${username}','${password}','${email}');`)
    console.log(result1);
    
}

async function main() {
    try {
        await client.connect()
        await createUserTable()
        await insertData('sukmrshil','sushuil78','sushkmril@gmail.com')
    } catch(err) {
        console.error(err)
    } finally {
        await client.end()  // always closes even if error!
    }
}
    
main();