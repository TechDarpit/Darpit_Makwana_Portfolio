import React, { useContext } from 'react';
import Style from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';
import { Box, Grid, ThemeProvider, createTheme } from '@mui/material';
import { DarkModeContext } from '@/context';

export default function Layout({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box className={darkMode ? Style.dark : Style.light}>
          <Grid
            container
            display={'flex'}
            flexDirection={'column'}
            minHeight={'100vh'}
            justifyContent={'space-between'}
          >
            <Grid item>
              <Navbar />
            </Grid>
            <Grid item flexGrow={1}>
              {children}
            </Grid>
            <Grid item>
              <Box
                component={'footer'}
                display={'flex'}
                flexDirection={'column'}
                className={Style.footer}
                alignItems={'center'}
                py={'1.5rem'}
                sx={{ opacity: 0.7 }}
                width={'100%'}
              >
                <p>
                  template created with &hearts; by{' '}
                  <a href={'https://techdarpit.github.io/Portfolio_Website/'}>
                    Darpit Makwana
                  </a>
                </p>
                <p>&copy; 2023</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
