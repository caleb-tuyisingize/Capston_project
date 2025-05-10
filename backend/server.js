import express from "express";
import cors from 'cors';
// import { database } from "../database.js";
import { studentsRouter } from "./router/router.js";
const app = express();
const port = process.env.SERVER_PORT;
import cors from 'cors'; 

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use(cors());
app.use("/API/student", studentsRouter)
app.use('/API/admin',studentsRouter)
app.listen(port, () => {
    console.log("Azure server: http://localhost:",port);
})