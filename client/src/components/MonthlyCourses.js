import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Course from './Course';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	pos: {
		marginBottom: 10
	}
}));

function renderDailyCourse(course, index, classes) {
	return (
		<div key={index} className={classes.pos}>
			<Paper className={classes.paper}>
				{course.year} / {course.month}
			</Paper>
			{course.courses &&
				course.courses.map((courseItem, index) =>
					Course(courseItem, index, classes, course.dayofweek)
				)}
		</div>
	);
}

function MonthlyCourses() {
	const [courseOfMonth, setCourseOfMonth] = useState({});

	useEffect(() => {
		const handleCourseChange = courseData => setCourseOfMonth(courseData);
		console.log('start request');
		axios
			.get('http://localhost:1233/api/courses/monthly')
			.then(response => {
				console.log(response);
				handleCourseChange(response.data);
			})
			.catch(error => console.log(error));
	}, []);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			{courseOfMonth.length &&
				courseOfMonth.map((courseItem, index) =>
					renderDailyCourse(courseItem, index, classes)
				)}
		</div>
	);
}

export default MonthlyCourses;
