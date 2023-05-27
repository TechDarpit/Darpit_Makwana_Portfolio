import { Avatar, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function stringAvatar({ label }) {
  return {
    sx: {
      bgcolor: '#101010',
    },
    children: `${label[0]}`.toUpperCase(),
  };
}

function SocialIcon({ social }) {
  return (
    <>
      <Link href={social.link} passHref>
        <Box>
          <social.component size='2rem' />
        </Box>
      </Link>
    </>
  );
}

export default SocialIcon;
