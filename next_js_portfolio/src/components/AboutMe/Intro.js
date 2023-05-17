import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { info } from '@/pages/api/Info';
import GradientDivider from '../UI/GradientDivider';

const Intro = () => {
  return (
    <>
      <Box>
        <Typography variant='h4'>About Me</Typography>
        <GradientDivider />
        <Typography variant='h6' sx={{ marginY: 3 }}>
          {info.bio}
        </Typography>
        <Divider sx={{ marginY: 3 }} />
      </Box>
    </>
  );
};

export default Intro;
