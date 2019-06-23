import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function Course(courseItem, index) {
	return (
		<div key={index}>
			<div>
				<div>{courseItem.name}</div>
				<div>{courseItem.coach}</div>
			</div>
			<div>
				<div>{courseItem.time}</div>
				<div>{courseItem.location}</div>
			</div>
		</div>
	);
}

function App() {
	const [course, setCourse] = useState({});

	useEffect(() => {
		const handleCourseChange = courseData => setCourse(courseData);
		console.log('start request');
		axios
			.get('http://localhost:1233/api/courses')
			.then(response => {
				console.log(response);
				handleCourseChange(response.data);
			})
			.catch(error => console.log(error));
	}, [course.year]);

	return (
		<div className='App'>
			<header>
				<p>{course.dayofweek}</p>
			</header>
			{course.courses && course.courses.map((courseItem, index) => Course(courseItem, index))}
		</div>
	);
}

export default App;
