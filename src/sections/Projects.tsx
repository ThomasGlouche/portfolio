import ProjectCard from "../components/ProjectCard";

export default function Projects() {

    const projects = [
        {
            title: "Gogole Map",

            description:
                "Application web cartographique conteneurisée permettant de visualiser et filtrer des villes françaises via une interface interactive.",

            highlights: [
                "Architecture multi-services Docker",
                "Backend REST Java Spring Boot",
                "Frontend JavaScript / Express",
                "Base de données MySQL",
                "Tests d’acceptation Cypress",
                "Filtrage géographique et démographique"
            ],

            technologies: [
                "Java",
                "Spring Boot",
                "Docker",
                "MySQL",
                "Express.js",
                "Cypress"
            ],

            live: "https://map.glouche.fr"
        },

        {
            title: "Application de gestion de stocks",

            description:
                "Développement d’un outil interne de gestion de stocks durant mon alternance chez Riou Glass.",

            highlights: [
                "Développement d’une interface métier",
                "Gestion des entrées / sorties",
                "Connexion base SQL Server",
                "Amélioration des processus internes"
            ],

            technologies: [
                "C#",
                ".NET",
                "SQL Server"
            ]
        },

        {
            title: "Automatisation & Reporting",

            description:
                "Développement de rapports SSRS et automatisation de traitements métiers chez Riou Glass.",

            highlights: [
                "Création de rapports SSRS",
                "Développement ETL Talend",
                "Automatisation de tests",
                "Optimisation des workflows"
            ],

            technologies: [
                "SSRS",
                "Talend",
                "SQL Server",
                "Testing"
            ]
        }
    ];

    return (
        <section
            id="projects"
            className="py-32 px-6 max-w-6xl mx-auto"
        >
            <div className="mb-16">

                <p className="text-blue-400 mb-2">
                    Projets
                </p>

                <h2 className="text-4xl font-bold">
                    Développement logiciel & infrastructure
                </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        highlights={project.highlights}
                        live={project.live}
                    />
                ))}

            </div>
        </section>
    );
}