export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-blue-400 font-medium mb-4">
                        Disponible pour un CDI
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Thomas
                        <span className="text-blue-500">.</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
                        Développeur Fullstack & DevOps
                    </h2>

                    <p className="text-gray-400 mt-6 leading-relaxed max-w-xl">
                        Étudiant ingénieur à l’ESIEA passionné par le développement
                        web, les architectures backend et les systèmes distribués.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <a
                            href="#projects"
                            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-medium"
                        >
                            Voir mes projets
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="border border-gray-700 hover:border-gray-500 transition px-6 py-3 rounded-lg"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl opacity-30 absolute"></div>

                    <div className="relative w-64 h-64 bg-gray-900 border border-gray-800 rounded-3xl flex items-center justify-center text-6xl font-bold">
                        T
                    </div>
                </div>

            </div>
        </section>
    );
}