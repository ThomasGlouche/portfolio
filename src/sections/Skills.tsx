import FadeIn from "../components/FadeIn";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "TailwindCSS",
            "HTML",
            "CSS"
        ]
    },

    {
        title: "Backend",
        skills: [
            "Java",
            "Spring Boot",
            "Node.js",
            "Express.js",
            "REST API",
            "Python"
        ]
    },

    {
        title: "DevOps & Infra",
        skills: [
            "Docker",
            "Linux",
            "Caddy",
            "Nginx",
            "Reverse Proxy",
            "CI/CD",
            "Ubuntu Server"
        ]
    },

    {
        title: "Database & Tools",
        skills: [
            "SQL Server",
            "PostgreSQL",
            "Talend",
            "SSRS",
            "Git",
            "Cypress"
        ]
    }
];

export default function Skills() {
    return (
        <FadeIn>

            <section
                id="skills"
                className="py-32 px-6 max-w-6xl mx-auto"
            >

                <div className="mb-16">

                    <p className="text-blue-400 mb-2">
                        Compétences
                    </p>

                    <h2 className="text-4xl font-bold">
                        Technologies & outils
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="
                                bg-gray-900/40
                                border
                                border-gray-800
                                rounded-2xl
                                p-8
                            "
                        >

                            <h3 className="text-2xl font-semibold mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                                            px-4
                                            py-2
                                            rounded-lg
                                            bg-blue-500/10
                                            border
                                            border-blue-500/20
                                            text-blue-300
                                            text-sm
                                        "
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </section>

        </FadeIn>
    );
}