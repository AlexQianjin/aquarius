import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Course(courseItem, index, dayofweek) {
    const bull = <span
        style={{
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)'
        }}>•</span>;

    return (
        <Card
            key={index}
            sx={{
                minWidth: 275
            }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color='textSecondary'
                    gutterBottom
                >
                    {courseItem.location}
                </Typography>
                <Typography sx={{ marginBottom: '12px' }} variant='h5' component='h2'>
                    {courseItem.name} {bull} {courseItem.coach}
                </Typography>
                <Typography className={'success'} variant='body2' component='p'>
                    {dayofweek} {courseItem.time}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Course;
