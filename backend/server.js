import express from "express";
// import { database } from "../database.js";
import { studentsRouter } from "./router/router.js";
const app = express();
const port = 3004;

app.use(express.json());

app.use("/API/student", studentsRouter)
app.listen(port, () => {
    console.log("Azure server: http://localhost:",port);
})