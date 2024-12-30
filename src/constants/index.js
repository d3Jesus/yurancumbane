export const navItems = [
    {
        "id": 1,
        "title":"Home",
        "link": "/",
    },
    {
        "id": 2,
        "title":"Services",
        "link": "#services",
    },
    {
        "id": 3,
        "title":"Experience",
        "link": "#experiences",
    },
    {
        "id": 4,
        "title":"Projects",
        "link": "#projects",
    },
    {
        "id": 5,
        "title":"Posts",
        "link": "#posts",
    }
]

import { faCode, faMagnifyingGlassChart, faRobot } from '@fortawesome/free-solid-svg-icons';
export const services = [
    {
        "id": 1,
        "icon": faMagnifyingGlassChart,
        "title": "System analysis",
        "description": "I identify and analyze your company's processes to optimize your systems and increase efficiency.",
        "delay": "100"
    },
    {
        "id": 2,
        "icon": faCode,
        "title": "Development",
        "description": "I develop personalized solutions to meet the specific needs of your business.",
        "delay": "200"
    },
    {
        "id": 3,
        "icon": faRobot,
        "title": "Automation",
        "description": "I automate repetitive processes to reduce errors and increase efficiency.",
        "delay": "300"
    }
]

export const projects = [
    {
        "id":1,
        "imageUrl": "/cover.PNG",
        "imageAlt": "authentication with supabase image",
        "title" : "AuthenticationWithSupabase",
        "description" : "A demonstration ilustrating how to authenticate a Blazor Server application using Supabase for secure user authentication and access management.",
        "stacks" : ['Blazor Server', 'Supabase'],
        "delay" : "100",
    },    
    {
        "id" : 2,
        "imageUrl": "/portfolio.PNG",
        "imageAlt": "portfolio image",
        "title" : "yurancumbane",
        "description" : "A personal portfolio that highlights my skills, showcase projects demonstrating how I can contribute to the success of your bussiness or project.",
        "stacks" : ['Vite + ReactJs', 'Bootstrap', 'Figma'],
        "delay" : "200",
    },
    {
        "id" : 3,
        "imageUrl": "/cashwhiz_home.PNG",
        "imageAlt": "Cash whiz image",
        "title" : "CashWhiz",
        "description" : "A finance system designed to efficiently manage and control expenses with a user-friendly, streamlined approach.",
        "stacks" : ['Blazor Server', 'Supabase', 'Chart.js'],
        "delay" : "300",
    },
    {
        "id" : 4,
        "imageUrl": "/vino.PNG",
        "imageAlt": "vino image",
        "title" : "Vino",
        "description" : "An inventory management system designed to help bussinesses in efficiently track, manage, and control their product stock and operations.",
        "stacks" : ['Blazor Server', 'EF Core', 'MySQL'],
        "delay" : "400",
    },
    {
        "id" : 5,
        "imageUrl": "/khumbuza_system.PNG",
        "imageAlt": "khumbuza_system image",
        "title" : "KhumbuzaSystem",
        "description" : "Platform to optimize the monitoring and control of equipment usage time and maintenance.",
        "stacks" : ['Blazor Server', 'EF Core', 'MySQL', 'JavaScript'],
        "delay" : "500",
    },
    {
        "id" : 6,
        "imageUrl": "/bot.png",
        "imageAlt": "bot image",
        "title" : "Database Automation Backup",
        "description" : "Scheduled database backup task, followed by data compression in ZIP format and transfer to a predefined directory.",
        "stacks" : ['UiPath Studio'],
        "delay" : "600",
    }
];

export const workExperience = [
    {
        "id" : 1,
        "position" : "Full Stack Web Developer",
        "company" : "Cinovate",
        "achivements" : "I performed the analysis and optimization of manual systems into computarized solutions, being mainly responsable for the development and maintenance of the systems backend, including leading the complete life cicly of the Khumbuza System.",
        "duration" : "2023 - present",
        "tools" : ["C#", "Entity Framework Core", "Blazor", "Git", "MySQL", "RESTFul API"],
        "delay" : "100"
    },
    {
        "id" : 2,
        "position" : "Full Stack Web Developer",
        "company" : "Database, Lda",
        "achivements" : "Committed to delivering effective solutions, I led a team of two technicians in the optimization and maintenance of critical systems. For three months, I led the first phase of the development of a new management system, in addition to making refinements in C# code and SQL instructions, resulting in a significant increase in system performance.",
        "duration" : "2020 - 2022",
        "tools" : ["Asp.Net MVC", "SQL Server", "Azure DevOps", "SQL", "JavaScript"],
        "delay" : "200"
    },
    {
        "id" : 3,
        "position" : "Freelance",
        "company" : "",
        "achivements" : "Driven by a passion for crafting innovative and tailored solutions, I'm commited to delivering  high-quality, user-centered results that empower bussinesses to grow and thrive in the digital world.",
        "duration" : "2018 - present",
        "tools" : ["Windows Form", "SQL Server", "JavaCript", "Visual Basic", "UiPath Studio", "drawio/UML", "C#"],
        "delay" : "300"
    }
];

export const posts = [
    {
        "id" : 1,
        "title" : "Autenticação Social com Supabase",
        "subtitle" : "Simplifique o login do seu app com Google, Facebook e outros provedores.",
        "link" : "https://medium.com/@yuran.dejesus/autentica%C3%A7%C3%A3o-social-com-supabase-44d049df8680",
        "delay" : "100"
    },
    {
        "id" : 2,
        "title" : "Blazor Server: Globalização e Localização",
        "subtitle" : "Implementando Globalização e Localização em Blazor Server em .NET 8",
        "link" : "https://medium.com/@yuran.dejesus/blazor-server-globaliza%C3%A7%C3%A3o-e-localiza%C3%A7%C3%A3o-6941cb9cd711",
        "delay" : "200"
    },
    {
        "id" : 3,
        "title" : "Modos de renderização do Blazor",
        "subtitle" : "Escolha o melhor modo para sua aplicação Blazor",
        "link" : "https://medium.com/@yuran.dejesus/modos-de-renderiza%C3%A7%C3%A3o-do-blazor-729be81878c8",
        "delay" : "400"
    },
    {
        "id" : 4,
        "title" : "Ars-Imaginis: Gerador de imagens alimentado por IA",
        "subtitle" : "Meu primeiro projecto usando IA",
        "link" : "https://medium.com/@yuran.dejesus/ars-imaginis-gerador-de-imagens-alimentado-por-ia-2a1a3918b72e",
        "delay" : "400"
    }
];

import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
export const socials = [
    {
        "id": 1,
        "icon" : faGithub,
        "link": "https://github.com/d3Jesus"
    },
    {
        "id": 2,
        "icon" : faLinkedin,
        "link": "https://www.linkedin.com/in/yurandejesus/"
    },
    {
        "id": 3,
        "icon" : faMedium,
        "link": "https://medium.com/@yuran.dejesus"
    }
]