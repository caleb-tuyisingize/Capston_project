import React, { useState } from 'react';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    course_code: '',
    course_name: '',
    department: '',
    level: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3004/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setMessage('Course added successfully!');
        setFormData({ course_code: '', course_name: '', department: '', level: '' });
      } else {
        const error = await res.json();
        setMessage('Error: ' + error.error);
      }
    } catch (err) {
      setMessage('Server error: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="course_code"
          placeholder="Course Code"
          value={formData.course_code}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="course_name"
          placeholder="Course Name"
          value={formData.course_name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="level"
          placeholder="Level"
          value={formData.level}
          onChange={handleChange}
        /><br />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
