import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import CourseModel, { CourseItem } from './Course';

interface CourseModel {
  courses: CourseItem[];
  year: number;
  month: number;
  dayofweek: string;
}

function DailyCourses() {
  const initCourse: CourseModel = {
    courses: [],
    year: 2022,
    month: 1,
    dayofweek: ''
  };
  const [course, setCourse] = useState(initCourse);

  useEffect(() => {
    const handleCourseChange = (courseData: CourseModel) =>
      setCourse(courseData);
    console.log('start request');
    axios
      .get('/api/courses')
      .then((response) => {
        console.log(response);
        if (
          response.data.courses !== undefined ||
          response.data.courses.length > 0
        ) {
          handleCourseChange(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [course.year]);

  if (course.courses.length === 0) {
    return <div>No Courses</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {course.courses &&
        course.courses.map((courseItem, index) =>
          CourseModel(courseItem, index, course.dayofweek)
        )}
    </Box>
  );
}

export default DailyCourses;
export type { CourseModel };
