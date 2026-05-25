type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
};

export default function ProjectCard({
                                        title,
                                        description,
                                        technologies,
                                        highlights
                                    }: ProjectCardProps) {

    return (
        <div className="
            bg-gray-900/40
            border border-gray-800
            rounded-2xl
            p-8
            hover:border-blue-500/30
            hover:-translate-y-1
            transition-all
            duration-300
        ">

            <h3 className="text-2xl font-semibold">
                {title}
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
                {description}
            </p>

            <div className="mt-6 space-y-3">

                {highlights.map((highlight) => (
                    <div
                        key={highlight}
                        className="flex items-start gap-3 text-gray-300"
                    >
                        <div className="
                            w-2 h-2
                            rounded-full
                            bg-blue-500
                            mt-2
                        "></div>

                        <p>{highlight}</p>
                    </div>
                ))}

            </div>

            <div className="flex flex-wrap gap-2 mt-8">

                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            px-3 py-1
                            rounded-lg
                            text-sm
                            bg-blue-500/10
                            border border-blue-500/20
                            text-blue-300
                        "
                    >
                        {tech}
                    </span>
                ))}

            </div>

        </div>
    );
}