import express from "express";
import { database } from "../database.js";

database.connect().then(() => console.log("conect"))
export const studentsRouter = express.Router()

<<<<<<< HEAD
=======



// - `GET /api/students` (Retrieve all students with pagination)
>>>>>>> 2499e78872f0b25bf152b038cf0f2f02c8964104

studentsRouter.get('/', async (req,res)=>{
    try{
        const data = await database.query("select * from students");
        return res.json(data.rows);
    }catch (err){
   console.log("Run into an error, can't connect");
    }
    })

<<<<<<< HEAD
=======


// - `POST /api/students` (Create a new student record)

studentsRouter.post('/',async (req,res)=>{
    const id=req.params.id
  const{
    first_name,
    last_name,
    student_id,
    email,
    date_of_birth,
    contact_number,
    enrollment_date,
    profile_picture,
  }=req.body


>>>>>>> 2499e78872f0b25bf152b038cf0f2f02c8964104

  try {

const selectquery=await database.query(
  `SELECT * FROM students WHERE(student_id=$1 OR contact_number=$2 OR email=$3 )AND id=$4`,[student_id,email,contact_number,id]
)

if(selectquery.rows.length>0){
  return res.status(409).json({message:"Email,contact number, student-id are allready exist"})
}


   const data = await database.query(
      `INSERT INTO students (first_name, last_name, student_id, email, date_of_birth, contact_number, enrollment_date,profile_picture)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[   first_name,
        last_name,
        student_id,
        email,
        date_of_birth,
        contact_number,
        enrollment_date,
        profile_picture
      ]
    )

    if(data.rows.length>0){
      res.status(409).json({message:"student not "})
    } else{
      res.status(201).json({message:"Students are inserted well",students:data.rows[0]})
    }


  
  } catch (error) {
    console.error(error.message)
    res.status(500).json({message:error.message})
  }
});

// - `PUT /api/students/:id` (Update an existing student record)

studentsRouter.put('/:id',async (req, res) => {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      student_id,
      email,
      date_of_birth,
      contact_number,
      enrollment_date,
      profile_picture,
    } = req.body;
    try {
      const check = await pool.query(
        `SELECT * FROM students 
         WHERE (student_id = $1 OR email = $2 OR contact_number = $3)
           AND id = $4`,
        [student_id, email, contact_number, id]
      );
      if (check.rows.length > 0) {
        return res.status(409).json({ message: 'Student ID, Email or Contact Number already exists.' });
      }
      const result = await database.query(
        `UPDATE students 
         SET  
           first_name = $1,
           last_name = $2,
           student_id = $3,
           email = $4,
           date_of_birth = $5,
           contact_number = $6,
           enrollment_date = $7,
           profile_picture = $8
         WHERE id = $9
         RETURNING *`,
        [
          first_name,
          last_name,
          student_id,
          email,
          date_of_birth,
          contact_number,
          enrollment_date,
          profile_picture,
          id,
        ]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: 'Student updated successfully', student: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // - `GET /api/students/:id` (Retrieve specific student details)
studentsRouter.get('/:id',async (req, res) => {
    const {id} = req.params;
      try {
      const student = await database.query("SELECT * FROM students where id=$1",[id]);
      res.status(200).json({
        success: true,
        count: student.rows.length,
        data: student.rows,
      });
    } catch (err) {
      logger.error(err.message);
      res.status(500).json({
          success: false,
          message: `An unexpected error occurred in GET/STUDENTS, ${err?.message}`,
        });
    }
});



// - `DELETE /api/students/:id` (Delete a student record)


studentsRouter.delete('/archive/:id',async (req, res) => {
    const {id}=req.params;
    try {
        // getting  a specific student
    const student = await database.query("SELECT * FROM students where id=$1",[id]);
    const studento = student.rows[0];
console.log("recieved",id);
    if (!studento) {
      return res.status(404).json({ message: `Student not found` });
    }

       

            const first_name=studento.first_name;
            const last_name=studento.last_name;
             const student_id=studento.student_id;
             const email=studento.email;
             const date_of_birth=studento.date_of_birth;
             const contact_number=studento.contact_number;
             const enrollment_date=studento.enrollment_date;
             const profile_picture=studento.profile_picture;
             await database.query(
                 `INSERT INTO students_archive (first_name, last_name, student_id, email, date_of_birth, contact_number, enrollment_date,profile_picture)
                 VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[   first_name,
                   last_name,
                   student_id,
                   email,
                   date_of_birth,
                   contact_number,
                   enrollment_date,
                   profile_picture
                 ]
               );
                

            

                            // Deleting or Archiving a student
                     await database.query("delete from students where id=$1",[id]);
          
                
                     res.json({
                        success: true,
                        message: "Student archived and removed successfully",
                      });
             
             

    }


    
            
            
     

        

     catch (err) {
        console.error(err.message); 
      res.status(500).json({
        success: false,
        message: `An unexpected error occurred in Delete/STUDENTS, ${err?.message}`,
      });
    }
<<<<<<< HEAD

    res.status(404).json({ message: "No users found in the database" });
    
  } catch (err) {
    console.error("Error connecting to the database:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});




studentsRouter.put('/', async (req, res) => {
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

    if (checking.rows.length <= 0) {
      return res.status(409).json({ message: "No email email" });
    }

    res.status(200).json({
      message: "Email found",
      user: checking.rows[0]
    })
    
    // const bcrypt = require('bcryptjs');
    // const hashedPassword = await bcrypt.hash(password, 10);

  
    // const insertQuery = await database.query(
    //   `INSERT INTO users(name, email, password, role, is_active)
    //    VALUES ($1, $2, $3, $4, $5)
    //    RETURNING id, name, email, role, is_active`,
    //   [name, email, password, role, is_active]
    // );

    
    // res.status(201).json({
    //   message: "User created successfully",
    //   // user: insertQuery.rows[0]
    // });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


 studentsRouter.post('/', async (req, res) =>{
  console.log('login-form');
})



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

=======
  });
  
>>>>>>> 2499e78872f0b25bf152b038cf0f2f02c8964104
  
// - `GET /api/students/search` (Search and filter students)





studentsRouter.get('/name/:first_name',async (req, res) => {
    const { first_name } = req.params;
  
    try {
      const response = await database.query(
         `SELECT * FROM students WHERE LOWER(first_name) LIKE LOWER($1)`,
        [`%${first_name}%`]
      );
  
      if (response.rows.length === 0) {
        return res.status(404).json({ message: "No students found with that first name" });
      }
  
      return res.status(200).json({
        message: "Student(s) found",
        students: response.rows
      });
    } catch (error) {
      console.error("Error fetching student by first name:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  