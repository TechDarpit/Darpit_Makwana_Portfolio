import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from '@/components/Portfolio/ProjectCard';
import { projects } from './api/Info';

const portfolio = (props) => {
  return (
    <>
      <Box sx={{ marginX: 10, marginY: 5 }}>
        <ProjectCard projects={projects} />
      </Box>
    </>
  );
};

export default portfolio;
