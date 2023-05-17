import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { DarkModeContext } from '@/context';

export default function Toggler() {
  const transition = 'all 250ms ease';

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Box
      fontSize={'1.5rem'}
      sx={{
        cursor: 'pointer',
        ':hover': { transform: 'translateY(-3px)', transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={toggleDarkMode} aria-label='Full Moon' role='img'>
          🌕
        </span>
      ) : (
        <span onClick={toggleDarkMode} aria-label='New Moon' role='img'>
          🌑
        </span>
      )}
    </Box>
  );
}
