import {Pool} from "pg";
import dotenv from 'dotenv';
dotenv.config()
export const database = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
});
// console.log(typeof(process.env.PASSWORD));