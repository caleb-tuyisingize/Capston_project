import {Pool} from "pg";

export const database = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Tuyisingize@123",
    port: 5432,
    database: "student_management"
});
