import yogiBearImg from '../assets/yogibear.png'
import pokemonImg from '../assets/pokemon.png'
import goGameImg from '../assets/gogame.png'
import portfolioImg from '../assets/portfolio.png'
import rpgImg from '../assets/rpg.png'
import serversImg from '../assets/servers.png'
import sheepFarmImg from '../assets/sheepfarm.png'
import superAdventureImg from '../assets/superadventure.png'
import companyImg from '../assets/company.png'

export const projects = [
    {
        name: "Servers and Clients",
        description: "A collection of server and client implementations showcasing network programming and communication protocols.",
        image: serversImg,
        technologies: ["Python", "Networking", "Socket Programming"],
        github: "https://github.com/szzsolesz08/ServersAndClients"
    },
    {
        name: "Yogi Bear Game",
        description: "A fun game implementation featuring Yogi Bear, demonstrating game development and graphics programming skills.",
        image: yogiBearImg,
        technologies: ["Java", "JavaFX", "Game Development"],
        github: "https://github.com/szzsolesz08/YogiBear"
    },
    {
        name: "Sheep Farm",
        description: "A farm management simulation game where players manage a sheep farm, showcasing object-oriented programming.",
        image: sheepFarmImg,
        technologies: ["Java", "OOP", "Game Development"],
        github: "https://github.com/szzsolesz08/SheepFarm"
    },
    {
        name: "Go Game",
        description: "An implementation of the classic Go board game, featuring AI opponents and multiplayer capabilities.",
        image: goGameImg,
        technologies: ["Java", "AI", "Game Development"],
        github: "https://github.com/szzsolesz08/GoGame"
    },
    {
        name: "Company App",
        description: "A comprehensive company management application for handling employees, departments, and business operations.",
        image: companyImg,
        technologies: ["PHP", "Database", "Laravel", "Web Development"],
        github: "https://github.com/szzsolesz08/CompanyApp"
    },
    {
        name: "Pokemon Game PHP",
        description: "A web-based Pokemon game implementation using PHP, demonstrating web development and game mechanics.",
        image: pokemonImg,
        technologies: ["PHP", "HTML", "CSS", "Game Development"],
        github: "https://github.com/szzsolesz08/pokegame_php"
    },
    {
        name: "RPG Game",
        description: "A role-playing game featuring character development, combat systems, and adventure elements.",
        image: rpgImg,
        technologies: ["C#", "Game Development", "OOP"],
        github: "https://github.com/szzsolesz08/RPG_Game"
    },
    {
        name: "Super Adventure",
        description: "An exciting adventure game showcasing game design and programming skills.",
        image: superAdventureImg,
        technologies: ["Game Development"],
        github: "https://github.com/szzsolesz08/SuperAdventure"
    },
    {
        name: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing my projects and skills. Features include dynamic project cards, contact form integration, and smooth animations.",
        image: portfolioImg,
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Formspree"],
        github: "https://github.com/szzsolesz08/PortfolioWebsite"
    }
];