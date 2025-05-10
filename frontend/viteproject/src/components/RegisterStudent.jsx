import React, { useState } from 'react';
import DisplayStudent from '../search/displaystudent';
import DisplayCourses from '../search/displaystudent';

const RegisterStudent = () => {
  const [student, setStudent] = useState({
    full_name: '',
    email: '',
    phone: '',
    department: '',
    level: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });

      if (res.ok) {
        setMessage(' Student registered successfully!');
        setStudent({
          full_name: '',
          email: '',
          phone: '',
          department: '',
          level: ''
        });
      } else {
        const err = await res.json();
        setMessage(' Error: ' + err.error);
      }
    } catch (error) {
      setMessage(' Server Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={student.full_name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={student.phone}
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="level"
          placeholder="Level"
          value={student.level}
          onChange={handleChange}
        /><br />
        <button type="submit">Register</button>
      </form>
<DisplayCourses/>
    </div>
    
  );
};

export default RegisterStudent;
