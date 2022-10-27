import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
          courses.map(course =>
            <Link className='text-decoration-none' key={course.id} to={`course/${course.id}`}><Button className='d-block mb-2 w-75' variant="outline-success">{course.name}</Button></Link>
          )
        }
      </div>
    </div>
  );
};

export default LeftSide;