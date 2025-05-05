import express from "express";
import { database } from "../database.js";

database.connect().then(() => console.log("conect"))
export const studentsRouter = express.Router()




// - `GET /api/students` (Retrieve all students with pagination)

studentsRouter.get('/', async (req,res)=>{
    try{
        const data = await database.query("select * from students");
        return res.json(data.rows);
    }catch (err){
   console.log("Run into an error, can't connect");
    }
    })

// - `GET /api/students/:id` (Retrieve specific student details)
// - `POST /api/students` (Create a new student record)
// - `PUT /api/students/:id` (Update an existing student record)
// - `DELETE /api/students/:id` (Delete a student record)
// - `GET /api/students/search` (Search and filter students)