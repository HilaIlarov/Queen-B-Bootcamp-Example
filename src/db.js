const { Pool } = require('pg');

/*
 * To use this code on your computer, follow these steps:
 * 1. Install PostgreSQL on your machine if not already installed.
 * 2. Create a database named 'queenb' in your PostgreSQL instance.
 * 3. Create the necessary tables in the 'queenb' database.
 * 4. Set the password for the 'postgres' user or replace it with your PostgreSQL username.
 * 5. Update the 'password' field below with the password you set for the 'postgres' user or your PostgreSQL user.
 */
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "queenb",
    password: "database",
    port: 5433,
});

module.exports = { pool };