import React from 'react';


const CourseDetailsCard = ({ courseDetail }) => {
  console.log(courseDetail);
  return (
    <div>
      {courseDetail.title}
    </div>
  );
};

export default CourseDetailsCard;