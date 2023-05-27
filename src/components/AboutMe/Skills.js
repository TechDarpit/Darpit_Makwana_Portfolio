import React from 'react';

import { skillsInfo } from '../../pages/api/Info';
import {
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import GradientDivider from '../UI/GradientDivider';

const Skills = () => {
  return (
    <>
      <Box>
        <Typography variant='h4'>Skills</Typography>
        <GradientDivider />
        <Typography variant='h6' sx={{ marginY: 3 }}>
          I have extensive experience working with a variety of technologies as
          a developer. I've developed and maintained multiple projects using
          these technologies, and I'm always eager to learn more.
        </Typography>
        <Divider />
        <Grid
          container
          sx={{
            '& .MuiTextField-root': { m: 2 },
          }}
        >
          {skillsInfo.map((Skill) => {
            return (
              <Grid item md={4} xs={12}>
                <ListItem key={Skill.slug} sx={{ minWidth: 350 }}>
                  <ListItemIcon>
                    <Skill.Component size='2.5rem' />
                  </ListItemIcon>
                  <ListItemText
                    primary={Skill.title}
                    secondary={Skill.Description}
                  />
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
        <Divider sx={{ marginY: 3 }} />
      </Box>
    </>
  );
};

export default Skills;
