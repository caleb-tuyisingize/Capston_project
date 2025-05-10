import express from "express";
import { database } from "../database.js";
import { Pool } from "pg";

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

studentsRouter.get('/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const del = await Pool.query("DELETE FROM student where sid=$1");
         res.json(del.filter((it) => it))
    } catch (e) {
        console.error(e.message);        
    }
})
// - `PUT /api/students/:id` (Update an existing student record)
// - `DELETE /api/students/:id` (Delete a student record)
// - `GET /api/students/search` (Search and filter students)

