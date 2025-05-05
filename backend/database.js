import {Pool} from "pg";

export const database = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0786690541@Elie",
    port: 5432,
    database: "Student_management"
});
