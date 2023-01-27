import houseRulesImg from './images/house-rules-screenshot.png'
import celebAstroImg from './images/celebrity-astrology.png'
import noteTakerImg from './images/note-taker.png'

export default [
    {
      id: 1,
      title: "House Rules",
      description: "Group project, full stack application. A user can signup/login and create posts, view others' posts",
      tech: "Handlebars.js, SQL, Express.js, Sequelize.js, JavaScript, Node.js, Bootstrap",
      imagePath: houseRulesImg,
      alt: "Image of the House Rules homepage",
      deployedLink: "https://house-rules.herokuapp.com",
      githubRepo: "https://github.com/jonpfluger/house-rules"
    },
    {
      id: 2,
      title: "Celebrity Astrology",
      description: "Group project, front end application. Uses multiple third party API's",
      tech: "jQuery, JavaScript, HTML, CSS, MUI",
      imagePath: celebAstroImg,
      alt: "Image of the Celebrity Astrology homepage",
      deployedLink: "https://jonpfluger.github.io/celebrity-astrology",
      githubRepo: "https://github.com/jonpfluger/celebrity-astrology"
    },
    {
      id: 3,
      title: "Note Taker",
      description: "Note Taker is an application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.",
      tech: "Express.js, Node.js, JavaScript",
      imagePath: noteTakerImg,
      alt: "Image of the Note Taker application",
      deployedLink: "https://jon-note-taker-app.herokuapp.com",
      githubRepo: "https://github.com/jonpfluger/note-taker"
    },

]