import Head from 'next/head';
import { Inter } from 'next/font/google';
import Style from '@/styles/Home.module.scss';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { info } from './api/Info';
import me from '../images/self-1.png';
import EmojiBullet from '@/components/HomePage/EmojiBullet';
import SocialIcon from '@/components/HomePage/SocialIcon';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Darpit Makwana</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box
          component={'main'}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'center'}
          minHeight={'calc(100vh - 175px)'}
        >
          <Box
            className={classNames(Style.avatar, Style.shadowed)}
            alt={'image of developer'}
            style={{ background: info.gradient }}
            component={Image}
            src={me}
            width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'}
            p={'0.75rem'}
            mb={{ xs: '1rem', sm: 0 }}
            mr={{ xs: 0, md: '2rem' }}
          />
          <Box>
            <h1 className={Style.h1}>
              Hi, I'm{' '}
              <span
                style={{
                  background: info.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {info.firstName}
              </span>
              <span className={Style.hand}>🤚</span>
            </h1>
            <br />
            <h2 className={Style.h2}>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
              {info.miniBio.map((bio, index) => (
                <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
              ))}
            </Box>
            <Box
              display={'flex'}
              gap={'2rem'}
              justifyContent={'center'}
              fontSize={{ xs: '2rem', md: '2.5rem' }}
            >
              {info.socials.map((social, index) => (
                <SocialIcon key={index} social={social} />
              ))}
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
