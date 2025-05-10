import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Student Management System</h1>
      <p>Select an action below:</p>
      
      <button onClick={() => navigate('/add-course')}>Add Course</button>
      <br /><br />
      <button onClick={() => navigate('/register-student')}>Register Student</button>
      <br /><br />
      <button onClick={() => navigate('/view-courses')}> View Courses</button>
  
    </div>
  );
};

export default WelcomePage;
