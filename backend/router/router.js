import express from "express";
import { database } from "../database.js";

database.connect().then(() => console.log("conect"))
export const studentsRouter = express.Router()





studentsRouter.get('/', async (req,res)=>{
    try{
        const data = await database.query("select * from students");
        return res.json(data.rows);
    }catch (err){
   console.log("Run into an error, can't connect");
    }
    })


    studentsRouter.get('/', async (req, res) => {
  try {
    const data = await database.query(`SELECT * FROM users`);
    
    if (data.rows.length > 0) {
      return res.status(200).json({
        message: "Users found",
        users: data.rows  
      });
    }

    res.status(404).json({ message: "No users found in the database" });
    
  } catch (err) {
    console.error("Error connecting to the database:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});




studentsRouter.post('/', async (req, res) => {
  const {
    name,
    email,
    password,
    role = 'admin',
    is_active = true
  } = req.body;

  try {
 
    const checking = await database.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (checking.rows.length > 0) {
      return res.status(409).json({ message: "This email is already taken" });
    }

   
    // const bcrypt = require('bcryptjs');
    // const hashedPassword = await bcrypt.hash(password, 10);

  
    const insertQuery = await database.query(
      `INSERT INTO users(name, email, password, role, is_active)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, email, role, is_active`,
      [name, email, password, role, is_active]
    );

    
    res.status(201).json({
      message: "User created successfully",
      user: insertQuery.rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



studentsRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  try {
    
    const checking = await database.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );
    if (checking.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    
    const emailCheck = await database.query(
      `SELECT * FROM users WHERE email = $1 AND id != $2`,
      [email, id]
    );
    if (emailCheck.rows.length > 0) {
      return res.status(409).json({ message: "Email already in use by another user" });
    }

  
 

    const updateQuery = await database.query(
      `UPDATE users
       SET name = $1, password = $2, email = $3
       WHERE id = $4
       RETURNING id, name, email, role, is_active`,
      [name, password, email, id]
    );

    res.status(200).json({
      message: "User updated successfully",
      user: updateQuery.rows[0]
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



studentsRouter.get('/', async (req, res) => {
  try {
    const result = await database.query('SELECT id, name, email, role FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching students" });
  }
});

