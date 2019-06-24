import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
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
	card: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
}));

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

	const classes = useStyles();

	return (
		<div className={classes.root}>
			{course.courses &&
				course.courses.map((courseItem, index) =>
					Course(courseItem, index, classes, course.dayofweek)
				)}
		</div>
	);
}

export default DailyCourses;
