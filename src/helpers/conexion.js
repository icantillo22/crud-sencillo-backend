import { createPool } from 'mysql2/promise'
import config from "./config";

const pool = createPool({
    host     : config.BD_HOST,
    user     : config.BD_USER,
    password : config.BD_PASSWORD,
    port: config.BD_PORT,    
    database: config.BD_NAME,
});

export default pool;