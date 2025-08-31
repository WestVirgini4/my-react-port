// Import images as string paths for Next.js
const API = "/my-react-port/assets/API.jpg";
const McLaren = "/my-react-port/assets/McLarenMockup.jpg";
const Moviestore = "/my-react-port/assets/Moviestore.jpg";
const TravelTrip = "/my-react-port/assets/Travel-Trip.jpg";
const Coffeeshop = "/my-react-port/assets/Coffeeshop.jpg";
const MusicPlayer = "/my-react-port/assets/musicplayer.jpg";


export const projectsData = [
    {
        id : 1,
        Image : API,
        title : 'Pokemon API Explorer',
        category : 'API',
        description : 'Interactive Pokemon database with search and filtering capabilities',
        demoLink : "https://pokemon-api-x2ya.onrender.com/",
        githubLink : "https://github.com/WestVirgini4/pokemon-api",
        techStack : ['React', 'JavaScript', 'REST API', 'CSS3']
    },
    {
        id : 2,
        Image : McLaren,
        title : 'McLaren Mockup',
        category : 'Landing Page',
        description : 'Luxury car showcase website with modern design and animations',
        demoLink : "https://mclarenmockupweb.onrender.com/",
        githubLink : "https://github.com/WestVirgini4/MclarenMockupWeb",
        techStack : ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    },
    {
        id : 3,
        Image : Moviestore,
        title : 'Movie Store',
        category : 'E-commerce',
        description : 'Digital movie marketplace with cart and payment integration',
        demoLink : "https://keen-cheesecake-1781d6.netlify.app/",
        githubLink : "https://github.com/WestVirgini4/movie-store",
        techStack : ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    {
        id : 4,
        Image : TravelTrip,
        title : 'Travel Trip Planner',
        category : 'Travel',
        description : 'Complete travel booking platform with destination guides',
        demoLink : "https://travel-trip-mpen.onrender.com/",
        githubLink : "https://github.com/WestVirgini4/Travel-Trip",
        techStack : ['React', 'Express.js', 'MySQL', 'Bootstrap']
    },
    {
        id : 5,
        Image : Coffeeshop,
        title : 'Coffee Shop',
        category : 'Restaurant',
        description : 'Modern cafe website with online ordering and menu display',
        demoLink : "https://mywebcoffeshop.onrender.com/",
        githubLink : "https://github.com/WestVirgini4/My-Coffe-Shop",
        techStack : ['Vue.js', 'Sass', 'Node.js', 'PostgreSQL']
    },
    {
        id : 6,
        Image : MusicPlayer,
        title : 'Music Player',
        category : 'Entertainment',
        description : 'Feature-rich music player with playlist and streaming support',
        demoLink : "https://musicplayer-29ie.onrender.com",
        githubLink : "https://github.com/WestVirgini4/musicplayer",
        techStack : ['React', 'Web Audio API', 'TypeScript', 'Styled Components']
    },
];

export const projectsNav = [
    {
        name : 'All',
    },
    {
        name : 'API',
    },
    {
        name : 'E-commerce',
    },
    {
        name : 'Landing Page',
    },
    {
        name : 'Travel',
    },
    {
        name : 'Restaurant',
    },
    {
        name : 'Entertainment',
    }

];