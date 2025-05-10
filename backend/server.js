import express from "express";
// import { database } from "../database.js";
import { studentsRouter } from "./router/router.js";
const app = express();
const port = process.env.SERVER_PORT;
import cors from 'cors'; 

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
// process.config();
app.use("/API/student", studentsRouter)
app.use('/API/admin',studentsRouter)
app.listen(port, () => {
    console.log("Azure server: http://localhost:",port);
})