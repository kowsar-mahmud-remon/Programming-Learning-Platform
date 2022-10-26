import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <div>
      <h2>All Courses: {courses.length}</h2>
      <div className="">
        {
          courses.map(course => <p key={course.id}>
            <Link to={`courses/${course.id}`}>{course.name}</Link>
          </p>)
        }
      </div>
    </div>
  );
};

export default LeftSide;