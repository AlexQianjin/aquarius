import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CourseItem {
  name: string;
  coach: string;
  location: string;
  time: string;
}

function Course(courseItem: CourseItem, index: number, dayofweek: string) {
  const bull = <span className={'bullet'}>•</span>;

  return (
    <Card
      key={index}
      className={'mt-2'}
      sx={{
        minWidth: 275
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
          {courseItem.location}
        </Typography>
        <Typography sx={{ marginBottom: '12px' }} variant="h5" component="h2">
          {courseItem.name} {bull} {courseItem.coach}
        </Typography>
        <Typography
          className={'bg-green-600 text-white'}
          variant="body2"
          component="p"
        >
          {dayofweek} {courseItem.time}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Course;
export type { CourseItem };
