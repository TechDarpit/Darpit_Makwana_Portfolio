import React from 'react';
import Skills from '@/components/AboutMe/Skills';
import Intro from '@/components/AboutMe/Intro';
import { Box } from '@mui/material';
import Eduction from '@/components/AboutMe/Eduction';
import Exprience from '@/components/AboutMe/Exprience';

const about = (props) => {
  return (
    <>
      <Box sx={{ marginX: 10, marginY: 5 }}>
        <Intro />
        <Skills />
        <Eduction />
        <Exprience />
      </Box>
    </>
  );
};

export default about;
