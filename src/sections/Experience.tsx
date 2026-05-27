import FadeIn from "../components/FadeIn";

export default function Experience() {
    return (
        <FadeIn>

            <section
                id="experience"
                className="py-32 px-6 max-w-5xl mx-auto"
            >

                <div className="mb-16">

                    <p className="text-blue-400 mb-2">
                        Expérience
                    </p>

                    <h2 className="text-4xl font-bold">
                        Parcours professionnel
                    </h2>

                </div>

                <div
                    className="
                        bg-gray-900/40
                        border
                        border-gray-800
                        rounded-2xl
                        p-8
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-4
                        "
                    >

                        <div>

                            <h3 className="text-2xl font-semibold">
                                Riou Glass
                            </h3>

                            <p className="text-blue-400 mt-1">
                                Alternant développeur
                            </p>

                        </div>

                        <span className="text-gray-500">
                            2022 — 2025
                        </span>

                    </div>

                    <div className="mt-8 space-y-4 text-gray-300">

                        <div className="flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                            <p>
                                Développement d’une application
                                interne de gestion de stocks
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                            <p>
                                Création de rapports SSRS
                                et reporting métier
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                            <p>
                                Développement de flux ETL
                                avec Talend
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                            <p>
                                Automatisation de tests
                                et optimisation de processus
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </FadeIn>
    );
}