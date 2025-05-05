import express from "express";
// import { database } from "../database.js";
import { studentsRouter } from "./router/router.js";
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
// process.config();
app.use("/API/student", studentsRouter)
app.listen(port, () => {
    console.log("Azure server: http://localhost:",port);
})