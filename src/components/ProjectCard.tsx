type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    live?: string;
    github?: string;
};

export default function ProjectCard({
                                        title,
                                        description,
                                        technologies,
                                        highlights,
                                        live,
                                        github
                                    }: ProjectCardProps) {
    return (
        <div
            className="
                bg-gray-900/40
                border border-gray-800
                rounded-2xl
                p-8
                hover:border-blue-500/30
                hover:-translate-y-1
                transition-all
                duration-300
            "
        >
            {/* HEADER */}
            <div className="flex justify-between items-start gap-4">
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>

                <div className="flex gap-3">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            className="text-gray-400 hover:text-white transition text-sm"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-4 leading-relaxed">
                {description}
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-3 text-gray-300"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <p className="text-sm leading-relaxed">
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2 mt-8">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            px-3 py-1
                            text-xs
                            rounded-lg
                            bg-blue-500/10
                            border border-blue-500/20
                            text-blue-300
                        "
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* ACTIONS */}
            {(live || github) && (
                <div className="flex gap-4 mt-8">
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            className="
                                px-4 py-2
                                bg-blue-500
                                hover:bg-blue-600
                                rounded-lg
                                text-white
                                text-sm
                                transition
                            "
                        >
                            Live Demo
                        </a>
                    )}

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            className="
                                px-4 py-2
                                border border-gray-700
                                hover:border-gray-500
                                rounded-lg
                                text-sm
                                text-gray-300
                                transition
                            "
                        >
                            Code
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}