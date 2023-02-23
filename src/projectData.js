import houseRulesImg from './images/house-rules-screenshot.png'
import celebAstroImg from './images/celebrity-astrology.png'
import noteTakerImg from './images/note-taker.png'
import teamProfileG from './images/team-profile-generator.png'
import eCommerceImg from './images/e-commerce-backend.PNG'
import jateImg from './images/jate-screenshot.PNG'
import socialNetworkApiImg from './images/social-network-api-screenshot.PNG'
import bookSearchGIF from './images/book-search-screenshot.gif'
import remembrallImg from './images/remembrall-homepage-screenshot.png'

export default [
    {
      id: 1,
      title: "Remembrall Game",
      description: "Group project, MERN stack. A user can play a memory game.",
      tech: "React-tsparticles, GraphQL, Apollo Server/Client, MongoDB/Mongoose, Node.js/Express.js",
      imagePath: remembrallImg,
      alt: "Image of the Remembrall game homepage",
      deployedLink: "https://lit-cove-97949.herokuapp.com/",
      githubRepo: "https://github.com/jonpfluger/remembrall-game"
    },
    {
      id: 2,
      title: "Book Search Engine",
      description: "Google Books API search engine. Allows users to save book searches to the back end. MERN stack.",
      tech: "React, GraphQL, Apollo Server/Client, MongoDB/Mongoose, Node.js/Express.js",
      imagePath: bookSearchGIF,
      alt: "Image of the book search homepage",
      deployedLink: "https://rocky-bayou-81676.herokuapp.com/",
      githubRepo: "https://github.com/jonpfluger/book-search-engine"
    },
    {
      id: 3,
      title: "House Rules",
      description: "Group project, full stack application. A user can signup/login and create posts, view others' posts",
      tech: "Handlebars, SQL, Express, Sequelize, JavaScript, Node.js, Bootstrap",
      imagePath: houseRulesImg,
      alt: "Image of the House Rules homepage",
      deployedLink: "https://house-rules.herokuapp.com",
      githubRepo: "https://github.com/jonpfluger/house-rules"
    },
    {
      id: 4,
      title: "Celebrity Astrology",
      description: "Group project, front end application. Uses multiple third party API's",
      tech: "jQuery, JavaScript, HTML, CSS, MUI",
      imagePath: celebAstroImg,
      alt: "Image of the Celebrity Astrology homepage",
      deployedLink: "https://jonpfluger.github.io/celebrity-astrology",
      githubRepo: "https://github.com/jonpfluger/celebrity-astrology"
    },
    {
      id: 5,
      title: "E-Commerce Back End",
      description: "Back end for an e-commerce site. It is a working Express API that uses Sequelize to interact with a MySQL database.",
      tech: "Express, MySQL, Sequelize, Node.js, JavaScript",
      imagePath: eCommerceImg,
      alt: "Image of the e-commerce back end using CRUD methods in Postman.",
      githubRepo: "https://github.com/jonpfluger/e-commerce-back-end"
    },
    {
      id: 6,
      title: "Social Network API",
      description: "API for a social network web application where users can create a friends list, share their thoughts, and react to friends' thoughts.",
      tech: "MongoDB, Mongoose, Express, Node.js, JavaScript",
      imagePath: socialNetworkApiImg,
      alt: "Image of the social network CRUD methods in Postman.",
      githubRepo: "https://github.com/jonpfluger/social-network-api"
    },
    {
      id: 7,
      title: "JATE | Just Another Text Editor",
      description: "Single-page PWA text editor. Functions offline natively and in the browser.",
      tech: "Express, Node.js",
      imagePath: jateImg,
      alt: "Image of the JATE app running natively in the browser.",
      deployedLink: "https://still-bastion-72387.herokuapp.com/",
      githubRepo: "https://github.com/jonpfluger/just-another-text-editor"
    },
    {
      id: 8,
      title: "Note Taker",
      description: "Uses an Express back end, saves and retrieves note data from a JSON file.",
      tech: "Express, Node.js, JavaScript",
      imagePath: noteTakerImg,
      alt: "Image of the Note Taker application",
      deployedLink: "https://sheltered-peak-54914.herokuapp.com/",
      githubRepo: "https://github.com/jonpfluger/note-taker"
    },
    {
      id: 9,
      title: "Team Profile Generator",
      description: "Uses Node.js to generate a team profile HTML doc",
      tech: "Inquirer, Jest, Node.js, JavaScript",
      imagePath: teamProfileG,
      alt: "Image of the Team Profile Generator application",
      githubRepo: "https://github.com/jonpfluger/team-profile-generator"
    }
]