
import { getClient } from "./utils.js";

async function getUser(){
    const client = await getClient();

    const selectUsersText = "SELECT * FROM users";
    const userRes = await client.query(selectUsersText);

    console.log("Users");
    for(let user of userRes.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserFromEmail(email:string){
    const client = await getClient();

    const selectUsersText = 'SELECT * FROM users WHERE email = $1';
    const useRes = await client.query(selectUsersText, [email]);

    console.log("Single User details:");
    for(let user of useRes.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`);
        
    }
    
}

async function getTodosForUser(userId: number){
    const client = await getClient();

    const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
    const todoRes = await client.query(selectTodosText,[userId]);

    console.log(`Todos for User Id ${userId}`);
    for(let todo of todoRes.rows){
        console.log(`ID: ${todo.id}, title: ${todo.title}, Description: ${todo.description}, done:{todo.done}`);
    }
}

getUser();
getUserFromEmail("sushilkmr@gmail.com");
const userIdToFetch = 1;
getTodosForUser(userIdToFetch);