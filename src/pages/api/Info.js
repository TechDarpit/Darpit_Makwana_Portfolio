import self from '../../images/self-1.png';
import carRentalPortal from '../../images/Portfolio/car_rental_portal.png';
import delightfulHandsLogin from '../../images/Portfolio/delightful_hands_login.png';
import delightfulHands from '../../images/Portfolio/delightful_hands.png';
import lucientLibrary from '../../images/Portfolio/lucient_library.png';
import lucientLibraryAdminPannel from '../../images/Portfolio/lucient_library_admin_pannel.png';
import portfolioWebsite from '../../images/Portfolio/portfolio_website.png';
import toDoApp from '../../images/Portfolio/to_do_app.png';
import weatherApp from '../../images/Portfolio/weather_app.png';

// Skills Icons from react-icons
import { DiTerminal, DiHtml5, DiNodejsSmall, DiReact } from 'react-icons/di';
import {
  SiFirebase,
  SiGit,
  SiCss3,
  SiMysql,
  SiAmazonaws,
  SiNextdotjs,
  SiInstagram,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
export let colors = ['#FF512F', '#DD2476'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Darpit',
  lastName: 'Makwana',
  // initials:
  // 'https://www.paytonpierce.dev/static/media/logo.9d65376b9c003070d0c4.png', // the example uses first and last, but feel free to use three or more if you like.
  initials: 'DM',

  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by tea',
    },
    {
      emoji: '🌎',
      text: 'based in the India',
    },
    {
      emoji: '💼',
      text: 'Jr. Software Devloper at Intuz',
    },
    {
      emoji: '📧',
      text: 'darpitmakwana@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://instagram.com',
      component: SiInstagram,
      label: 'Instagram',
    },
    {
      link: 'https://github.com',
      component: SiGithub,
      label: 'github',
    },
    {
      link: 'https://linkedin.com',
      component: SiLinkedin,
      label: 'linkedin',
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Darpit. I'm a full-stack web developer specializing in Node.js and React.js with 1+ years of experience in developing robust, scalable, and secure web applications. I have a strong background in building RESTful APIs, and I have worked with various database technologies such as MongoDB, MySQL, and PostgreSQL. I am a proactive and detail-oriented individual who enjoys working in a collaborative environment and is committed to delivering projects on time and within budget.",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'figma',
    ],
    exposedTo: ['nodejs', 'python', 'adobe illustrator'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
};

export const eductions = [
  {
    avtarText: 'MU',
    title: 'Bachelor of Engineering',
    institute: 'Marwadi University',
    year: '2018 - 2022',
  },
  {
    avtarText: 'MS',
    title: 'H.S.C',
    institute: 'P V Modi School',
    year: '2016- 2018',
  },
  {
    avtarText: 'DS',
    title: 'S.S.C',
    institute: 'L G Dholakiya School',
    year: '2015 - 2016',
  },
];

export const experience = [
  {
    avatar: 'IS',
    companyName: 'Intuz Solutions Pvt. Ltd.',
    years: 'Jan 2022 - Present',
    position: 'Jr. Software Devloper',
    description:
      'I Learned lot of things like Node JS, React JS, Next JS, Typescript and many more.',
  },
  {
    avatar: 'CS',
    companyName: 'CreArt Solutions',
    years: 'May 2021 - Jun 2021',
    position: 'Trainee PHP Devloper',
    description:
      'I Learned PHP with the basics of laravel & built a registration form with login functionality, SMS application, Email application.',
  },
];

export const skillsInfo = [
  {
    slug: 'node',
    Component: DiNodejsSmall,
    title: 'Node JS',
    Description: 'Node Js, Express JS',
  },
  {
    slug: 'reat',
    Component: DiReact,
    title: 'React JS',
    Description: 'Web app development',
  },
  {
    slug: 'next',
    Component: SiNextdotjs,
    title: 'Next JS',
    Description: 'React Js framwork',
  },
  {
    slug: 'aws',
    Component: SiAmazonaws,
    title: 'AWS Lambda',
    Description: 'Lambda functions for creating APIs',
  },
  {
    slug: 'html',
    Component: DiHtml5,
    title: 'HTML',
    Description: 'Static webpages and portfolio projects',
  },
  {
    slug: 'css',
    Component: SiCss3,
    title: 'CSS',
    Description: 'Styling of my webpages',
  },

  {
    slug: 'sql',
    Component: SiMysql,
    title: 'MySQL',
    Description: 'Storing client and user data',
  },
  {
    slug: 'terminal',
    Component: DiTerminal,
    title: 'Bash',
    Description: 'Ease of life and build scripts',
  },
  {
    slug: 'firebase',
    Component: SiFirebase,
    title: 'Firebase',
    Description: 'Authentication, database and analytics',
  },
  {
    slug: 'git',
    Component: SiGit,
    title: 'Git',
    Description: 'Code management and open source contributions',
  },
];

export const projects = [
  {
    title: 'Portfolio Website',
    description: 'description description description',
    live: 'https://techdarpit.github.io/Portfolio_Website/',
    gitHub: 'https://github.com/TechDarpit/Portfolio_Website',
    image: portfolioWebsite,
  },
  {
    title: 'Lucient Library',
    description: 'description description description',
    gitHub: 'https://github.com/TechDarpit/Library_Management_System_Frontend',
    image: lucientLibrary,
  },
  {
    title: 'Car Rental Portal',
    description: 'description description description',
    gitHub: 'https://github.com/TechDarpit/car_rental_portal',
    image: carRentalPortal,
  },
  {
    title: 'Delightful Hands',
    description: 'description description description',
    gitHub: '',
    image: delightfulHandsLogin,
  },
  {
    title: 'To Do App',
    description: 'description description description',
    gitHub: 'https://github.com/TechDarpit/ToDo_APP_AngularJS',
    image: toDoApp,
  },
  {
    title: 'Weather App',
    description: 'description description description',
    gitHub: 'https://github.com/TechDarpit/Weather_App_AngularJS',
    image: weatherApp,
  },
];
