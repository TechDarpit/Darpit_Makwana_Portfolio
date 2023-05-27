import React from 'react';
import GradientDivider from '../UI/GradientDivider';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import { experience } from '@/pages/api/Info';

const Exprience = () => {
  return (
    <>
      <Box>
        <Typography variant='h4'>Exprience</Typography>
        <GradientDivider />

        {experience.map((item) => {
          return (
            <Card sx={{ marginY: 2 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: '#0056H7', width: 56, height: 56 }}
                    aria-label='recipe'
                  >
                    {item.avatar}
                  </Avatar>
                }
                title={
                  <Typography variant='h5' component='div'>
                    {item.companyName}
                  </Typography>
                }
                subheader={
                  <>
                    <Typography variant='body1' component='div'>
                      {item.position}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.years}
                    </Typography>
                  </>
                }
              />
              <CardContent>
                <Typography variant='caption'>{item.description}</Typography>
              </CardContent>
            </Card>
          );
        })}

        <Divider sx={{ marginY: 3 }} />
      </Box>
    </>
  );
};

export default Exprience;
