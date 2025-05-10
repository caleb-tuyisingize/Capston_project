// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <h3>Student System Menu</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><Link to="/welcome">Home / Welcome</Link></li>
        <li><Link to="/register-student"> Register Student</Link></li>
        <li><Link to="/add-course"> Add Course</Link></li>
        <li><Link to="/view-courses"> View Courses</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
