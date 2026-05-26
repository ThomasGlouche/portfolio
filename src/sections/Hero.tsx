import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="
                min-h-screen
                flex
                items-center
                justify-center
                relative
                overflow-hidden
                px-6
            "
        >

            {/* BACKGROUND GLOW */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.35, 0.2]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity
                }}
                className="
                    w-72
                    h-72
                    rounded-full
                    bg-gradient-to-br
                    from-blue-500
                    to-purple-600
                    blur-3xl
                    absolute
                "
            />

            {/* CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                    max-w-5xl
                    mx-auto
                    text-center
                    relative
                    z-10
                "
            >

                {/* SMALL INTRO */}
                <p
                    className="
                        text-blue-400
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        mb-6
                    "
                >
                    Fullstack Developer
                </p>

                {/* MAIN TITLE */}
                <h1
                    className="
                        text-5xl
                        md:text-7xl
                        font-black
                        leading-tight
                    "
                >
                    Thomas
                    <br />

                    <span
                        className="
                            bg-gradient-to-r
                            from-blue-400
                            to-purple-500
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Software Engineer
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                    className="
                        mt-8
                        text-gray-400
                        text-lg
                        md:text-xl
                        leading-relaxed
                        max-w-3xl
                        mx-auto
                    "
                >
                    Développeur fullstack passionné par
                    l’architecture logicielle, le DevOps
                    et les applications web modernes.

                    <br />
                    <br />

                    Étudiant ingénieur à l’ESIEA avec
                    expérience en développement backend,
                    Docker, automatisation et infrastructure Linux.
                </p>

                {/* BUTTONS */}
                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                        justify-center
                        mt-12
                    "
                >

                    <a
                        href="#projects"
                        className="
                            px-8
                            py-4
                            rounded-xl
                            bg-blue-500
                            hover:bg-blue-600
                            transition
                            text-white
                            font-medium
                        "
                    >
                        Voir mes projets
                    </a>

                    <a
                        href="https://map.glouche.fr"
                        target="_blank"
                        className="
                            px-8
                            py-4
                            rounded-xl
                            border
                            border-gray-700
                            hover:border-gray-500
                            transition
                            text-gray-300
                            font-medium
                        "
                    >
                        Live Demo
                    </a>

                </div>

                {/* TECH STACK */}
                <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-3
                        mt-16
                    "
                >

                    {[
                        "React",
                        "TypeScript",
                        "Java",
                        "Spring Boot",
                        "Docker",
                        "Linux",
                        "MySQL"
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-white/5
                                border
                                border-white/10
                                text-sm
                                text-gray-300
                                backdrop-blur-sm
                            "
                        >
                            {tech}
                        </span>
                    ))}

                </div>

            </motion.div>

        </section>
    );
}