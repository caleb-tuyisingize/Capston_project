import React, { useEffect, useState } from 'react';

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:3004/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses: ' + err.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2> Course List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>{course.department}</td>
                <td>{course.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewCourses;
