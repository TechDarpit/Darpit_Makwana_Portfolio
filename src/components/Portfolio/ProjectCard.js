import { GitHub, Preview } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const ProjectCard = ({ projects }) => {
  return (
    <>
      <Grid
        container
        sx={{
          '& .MuiTextField-root': { m: 2 },
        }}
      >
        {projects.map((project) => {
          return (
            <Card sx={{ margin: 1 }} key={project.title}>
              <CardMedia
                sx={{ width: 350, height: 157.66 }}
                image={project.image.src}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {project.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.gitHub && (
                  <Button
                    size='small'
                    startIcon={<GitHub />}
                    href={project.gitHub}
                  >
                    Github
                  </Button>
                )}
                {project.live && (
                  <Button
                    size='small'
                    startIcon={<Preview />}
                    href={project.live}
                  >
                    Live
                  </Button>
                )}
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default ProjectCard;
