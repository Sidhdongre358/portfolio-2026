export const projectsData = [
    {
        id: "plm-backend",
        title: "Automotive PLM Backend Platform",
        shortDesc: "Enterprise backend system for managing EBOM and automotive parts data.",
        description: `
Enterprise-grade backend platform built for managing complex EBOM and engineering data 
for an automotive client using Java, Spring Boot, Microservices, and 3DEXPERIENCE ENOVIA.

The system supports large-scale product lifecycle operations, ensures data consistency, 
and provides secure REST APIs for integration with multiple enterprise systems.
    `,
        tech: ["Java", "Spring Boot", "Microservices", "ENOVIA", "MySQL", "Docker"],
        responsibilities: [
            "Designed and developed scalable REST APIs",
            "Handled EBOM and complex engineering data models",
            "Implemented validation, exception handling, and logging",
            "Used AI tools to improve productivity and code quality",
            "Supported CI/CD pipelines and Docker deployments",
            "Performed code reviews and production issue fixes"
        ],
        confidential: true
    },

    {
        id: "legacy-migration",
        title: "Legacy Data Migration System",
        shortDesc: "Backend services for migrating data from legacy PLM systems to 3DEXPERIENCE.",
        description: `
A backend system developed to migrate large volumes of data from legacy PLM systems 
into the 3DEXPERIENCE platform with validation and transformation logic.

The solution ensured data accuracy, consistency, and smooth transition with minimal downtime.
    `,
        tech: ["Spring Boot", "MongoDB", "MySQL", "REST APIs", "Batch Processing"],
        responsibilities: [
            "Developed migration APIs and batch processing jobs",
            "Implemented validation and transformation logic",
            "Optimized database queries for performance",
            "Collaborated with QA and business teams",
            "Resolved migration issues and data mismatches"
        ],
        confidential: true
    },

    {
        id: "ecommerce-microservices",
        title: "E-Commerce Microservices",
        shortDesc: "Microservices-based system for authentication, product catalog, and orders.",
        description: `
A microservices-based e-commerce backend system designed with independent services for 
authentication, product catalog, cart, and order management using Spring Boot.

Implemented JWT-based authentication and role-based access control.
    `,
        tech: ["Java", "Spring Boot", "Microservices", "MySQL", "Docker", "JWT"],
        responsibilities: [
            "Designed microservices architecture",
            "Implemented JWT-based authentication and authorization",
            "Built APIs for product, cart, and order services",
            "Dockerized services for deployment",
            "Performed unit testing and debugging"
        ],
        confidential: false,
        github: "https://github.com/Sidhdongre358/Ecommerce-application/tree/master",

    },

    {
        id: "wrio-retailer-app",
        title: "WRIO Retailer App",
        shortDesc: "Full-stack retail management application with Spring Boot and React.",
        description: `
A full-stack retail management system built with Spring Boot backend and React frontend.
Supports product management, inventory tracking, and order processing for small retailers.
    `,
        tech: ["Spring Boot", "React", "MongoDB", "REST APIs"],
        responsibilities: [
            "Developed backend APIs using Spring Boot",
            "Built responsive frontend using React",
            "Integrated MongoDB database",
            "Implemented CRUD operations and validations",
            "Deployed and tested application"
        ],
        confidential: false,
        github: "",
        live: "https://play.google.com/store/apps/details?id=com.deviseapps.wrio&pcampaignid=web_share"
    },

    {
        id: "portfolio-website",
        title: "Developer Portfolio Website",
        shortDesc: "Personal portfolio website showcasing projects, skills, and experience.",
        description: `
A modern, responsive portfolio website built using React to showcase professional profile,
projects, experience, and courses with clean UI and smooth navigation.
    `,
        tech: ["React", "CSS", "JavaScript", "Vercel"],
        responsibilities: [
            "Designed UI/UX for portfolio website",
            "Implemented reusable React components",
            "Added routing for project detail pages",
            "Optimized for mobile responsiveness",
            "Deployed using Vercel"
        ],
        confidential: false,
        github: "https://github.com/Sidhdongre358/portfolio-2026",
        live: "https://sidarthdongre.vercel.app/"
    }
];