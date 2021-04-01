// TODO Add a couple lines about each project
const data = [
  {
    title: 'Digital Grocery',
    link: 'https://digital-grocery.netlify.app/',
    subtitle: 'An e-commerce site with intuitive, user-friendly UI',
    image: '/images/projects/grocery',
    date: '2019-09-01',
    desc:
      'A basic online shopping site written in React and Bootstrap. '+
      'Designed with a focus on intuitive, user-friendly UI. '+
      'Made for my UI design class. No backend is used, all data are stored on the browser. ' +
      'https://github.com/huycans/digital-grocery'
      
  },
  {
    title: 'Secured Rummy card game',
    link: 'https://rummy-cardgame.herokuapp.com/',
    subtitle: 'A security-focus online game',
    image: '/images/projects/rummy',
    date: '2020-12-01',
    desc:
      'A secured Rummy card game for 2 players. '+
      'Written in React and NodeJS, with MongoDB database. '+
      'This app follows most OWASP recommendations for security. '+
      'Includes: email authentication; proper user data validation, secured against SQL injection, CSRF, XSS; proper session management and data audit trail to prevent cheating. '+
      'Game data are transfered over secured TLS and Websocket. '+
      'https://github.com/huycans/Rummy-server'
  },
  {
    title: 'YAMEX forum',
    link: 'https://yamex.herokuapp.com/',
    subtitle: 'A basic internet forum',
    image: '/images/projects/yamex',
    date: '2020-09-01',
    desc:
      'A basic motorcycle theme internet forum, written in React and NodeJS and MongoDB. '+
      'Support account creation, authentication, threads creation, replying, and avatar uploading. '+
      'https://github.com/huycans/yamex-murof-backend'
  },
];

export default data;
