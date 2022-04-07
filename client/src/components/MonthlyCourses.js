import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Course from './Course';

function renderDailyCourse(course, index) {
    return (
        <Box key={index} sx={{ marginBottom: 10 }}>
            <Paper sx={{
                padding: (theme) => theme.spacing(2),
                textAlign: 'center',
                color: (theme) => theme.palette.text.secondary
            }}>
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
    const [courseOfMonth, setCourseOfMonth] = useState({});

    useEffect(() => {
        const handleCourseChange = courseData => setCourseOfMonth(courseData);
        console.log('start request');
        axios
            .get('/api/courses/monthly')
            .then(response => {
                console.log(response);
                handleCourseChange(response.data);
            })
            .catch(error => console.log(error));
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
