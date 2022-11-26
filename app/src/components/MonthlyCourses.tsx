import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Course from './Course';
import { CourseModel } from './DailyCourses';

function renderDailyCourse(course: CourseModel, index: number) {
  return (
    <Box key={index} className={'mb-8'}>
      <Paper
        className={'text-xl font-bold mt-2'}
        sx={{
          padding: (theme) => theme.spacing(2),
          textAlign: 'center',
          color: (theme) => theme.palette.text.secondary
        }}
      >
        {course.year} / {course.month}
      </Paper>
      {course.courses &&
        course.courses.map((courseItem, index) =>
          Course(courseItem, index, course.dayofweek)
        )}
    </Box>
  );
}

function MonthlyCourses() {
  const initCourses: CourseModel[] = [];
  const [courseOfMonth, setCourseOfMonth] = useState(initCourses);

  useEffect(() => {
    const handleCourseChange = (courseData: CourseModel[]) => setCourseOfMonth(courseData);
    console.log('start request');
    axios
      .get('/api/courses/monthly')
      .then((response) => {
        console.log(response);
        handleCourseChange(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {courseOfMonth.length &&
        courseOfMonth.map((courseItem, index) =>
          renderDailyCourse(courseItem, index)
        )}
    </Box>
  );
}

export default MonthlyCourses;
