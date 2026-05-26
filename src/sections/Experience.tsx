import FadeIn from "../components/FadeIn";

export default function Experience() {
    return (
        <FadeIn>
            <section className="py-32 px-6 max-w-6xl mx-auto">

                <div className="mb-16">
                    <p className="text-blue-400 mb-2">
                        Expérience
                    </p>

                    <h2 className="text-4xl font-bold">
                        Parcours professionnel
                    </h2>
                </div>

                <div className="space-y-16">

                    <div className="
                        border border-gray-800
                        bg-gray-900/40
                        rounded-2xl
                        p-8
                    ">
                        <div className="flex justify-between flex-wrap gap-4">

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Riou Glass
                                </h3>

                                <p className="text-blue-400 mt-2">
                                    Alternant développement
                                </p>
                            </div>

                            <p className="text-gray-500">
                                2022 - 2025
                            </p>
                        </div>

                        <div className="mt-8 space-y-4 text-gray-300">

                            <p>
                                • Développement de rapports SSRS pour le suivi métier et la visualisation de données.
                            </p>

                            <p>
                                • Conception d’une application interne de gestion de stocks.
                            </p>

                            <p>
                                • Développement de flux ETL avec Talend.
                            </p>

                            <p>
                                • Automatisation de tests et amélioration des processus internes.
                            </p>

                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">

                            {[
                                "C#",
                                "SQL Server",
                                "SSRS",
                                "Talend",
                                "Testing",
                                "Automation"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                        px-4 py-2
                                        bg-gray-800
                                        rounded-lg
                                        text-sm
                                    "
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>
                    </div>

                </div>
            </section>
        </FadeIn>
    );
}