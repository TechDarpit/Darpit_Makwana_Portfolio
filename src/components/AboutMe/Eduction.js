import React from 'react';
import GradientDivider from '../UI/GradientDivider';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import { eductions } from '@/pages/api/Info';

const Eduction = () => {
  return (
    <>
      <Box>
        <Typography variant='h4'>Eduction</Typography>
        <GradientDivider />

        {eductions.map((item) => {
          return (
            <Card sx={{ marginY: 2 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: '#0056H7', width: 56, height: 56 }}
                    aria-label='recipe'
                  >
                    {item.avtarText}
                  </Avatar>
                }
                title={
                  <Typography variant='h5' component='div'>
                    {item.title}
                  </Typography>
                }
                subheader={
                  <>
                    <Typography variant='body1' component='div'>
                      {item.institute}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.year}
                    </Typography>
                  </>
                }
              />
            </Card>
          );
        })}

        <Divider sx={{ marginY: 3 }} />
      </Box>
    </>
  );
};

export default Eduction;
