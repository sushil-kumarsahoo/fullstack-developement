const { Client } = require('pg');

const connectionString = "";

const client = new Client({
    connectionString: connectionString
});

client.connect(err => {
    if(err){
        console.error('connection string error', err.stack);
    } else {
        console.log('connected to the database');
        
    }
});

client.query('SELECT NOW()', (err,res) => {
    if(err){
        console.error(err);
    } else {
        console.log(res.rows[0]);
        
    }
    client.end();
})