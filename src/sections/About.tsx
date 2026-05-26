import FadeIn from "../components/FadeIn";

export default function About() {
    return (
        <FadeIn>
            <section
                id="about"
                className="py-32 px-6 max-w-6xl mx-auto"
            >
                <div className="grid md:grid-cols-2 gap-16">

                    <div>
                        <p className="text-blue-400 mb-2">
                            À propos
                        </p>

                        <h2 className="text-4xl font-bold">
                            Construire des applications modernes.
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-400 leading-relaxed">
                            Je développe des applications web modernes avec React,
                            Node.js et TypeScript. Je m’intéresse également au DevOps,
                            aux architectures backend distribuées et aux systèmes Linux.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">

                            {[
                                "React",
                                "TypeScript",
                                "Node.js",
                                "Docker",
                                "RabbitMQ",
                                "Linux",
                                "PostgreSQL"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </FadeIn>
    );
}