import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import { Box } from '@mui/material';
import { info } from '../../pages/api/Info';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Toggler from '../HomePage/Toggler';
import { transform, transition } from '@/utils/constents';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'Home',
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'about',
  },
  {
    name: info.initials,
    type: 'initials',
    to: '/',
    active: 'home',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'portfolio',
  },
];

export default function Navbar() {
  const location = useRouter();
  const [active, setActive] = useState(
    location.pathname === '/'
      ? 'home'
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={'nav'} width={'100%'} className={Style.nev}>
      <Box
        marginY={2}
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        textTransform={'capitalize'}
        fontSize={'1rem'}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={'li'}
            className={link.active === active && !link.type && Style.active}
            sx={{
              borderImageSource: info.gradient,
              ':hover': {
                transform: transform,
                transition: transition,
                color: info.gradient,
              },
            }}
          >
            <Link
              href={link.to}
              onClick={() => setActive(link.active)}
              className={Style.link}
            >
              {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}

              {/* {link.type && (
                <img src={link.name} style={{ maxWidth: '75px' }}></img>
              )} */}

              {link.type && (
                <h1
                  style={{
                    background: info.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {link.name}
                </h1>
              )}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler />
        </li>
      </Box>
    </Box>
  );
}
