import { Pool } from "pg";

const pool = new Pool({
    connectionString:"postgresql://postgres:M$S9S%40aat@localhost:5432/inventory",
});

export default pool;