import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Course from './Course';

function DailyCourses() {
    const [course, setCourse] = useState({});

    useEffect(() => {
        const handleCourseChange = courseData => setCourse(courseData);
        console.log('start request');
        axios
            .get('/api/courses')
            .then(response => {
                console.log(response);
                handleCourseChange(response.data);
            })
            .catch(error => console.log(error));
    }, [course.year]);

    return (
        <Box sx={{flexGrow: 1}}>
            {course.courses &&
				course.courses.map((courseItem, index) =>
				    Course(courseItem, index, course.dayofweek)
				)}
        </Box>
    );
}

export default DailyCourses;
