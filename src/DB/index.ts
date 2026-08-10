import config from "../config";
import { Pool } from "pg";
export const pool = new Pool({
    connectionString: config.CONNECTIVITYSTR,
});

export const initDB = async() =>{
    try {
        
    } catch (error:any) {
        console.error("Error creating tables:");
    console.error(error.message);
    console.error(error);
    }
};