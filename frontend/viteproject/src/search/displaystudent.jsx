import React, { useEffect, useState } from 'react';

const DisplayCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:3004/api/courses');
        const data = await res.json();
        setCourses(data);
        setFilteredCourses(data);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };

    fetchCourses();
  }, []);


  useEffect(() => {
    const filtered = courses.filter(course =>
      course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  return (
    <div>
      <h2>Course List</h2>
      <input
        type="text"
        placeholder="Search by course name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /><br /><br />

      {filteredCourses.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>{course.department}</td>
                <td>{course.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default DisplayCourses;
