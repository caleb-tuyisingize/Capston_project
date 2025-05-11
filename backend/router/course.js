import express from "express";
import { database } from "../database.js";

database.connect().then(() => console.log("conected"))
export const router = express.Router()

router.get('/courses', async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM courses ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/courses/:id', async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM courses WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/courses', async (req, res) => {
  const { course_code, course_name, department, level } = req.body;
  try {
    await database.query(
      'INSERT INTO courses (course_code, course_name, department, level) VALUES ($1, $2, $3, $4)',
      [course_code, course_name, department, level]
    );
    res.status(201).json({ message: 'Course created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put('/courses/:id', async (req, res) => {
  const { course_code, course_name, department, level } = req.body;
  try {
    await database.query(
      'UPDATE courses SET course_code = $1, course_name = $2, department = $3, level = $4 WHERE id = $5',
      [course_code, course_name, department, level, req.params.id]
    );
    res.json({ message: 'Course updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/courses/:id', async (req, res) => {
  try {
    await database.query('DELETE FROM courses WHERE id = $1', [req.params.id]);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


