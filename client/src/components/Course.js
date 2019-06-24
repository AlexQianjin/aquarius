import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Course(courseItem, index, classes, dayofweek) {
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card key={index} className={classes.card}>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom
				>
					{courseItem.location}
				</Typography>
				<Typography className={classes.pos} variant='h5' component='h2'>
					{courseItem.name} {bull} {courseItem.coach}
				</Typography>
				<Typography variant='body2' component='p'>
					{dayofweek} {courseItem.time}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Course;
