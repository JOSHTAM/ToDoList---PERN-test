import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    password: "1234",   // password i used when using postgres
    host: "localhost",  // this machine is working on our local machine 
    database: "pernstack",
    post: 5432
});

export default pool;