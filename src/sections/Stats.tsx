import FadeIn from "../components/FadeIn";

const stats = [
    {
        value: "3",
        label: "Années d’alternance"
    },

    {
        value: "10+",
        label: "Technologies utilisées"
    },

    {
        value: "2",
        label: "Applications déployées"
    },

    {
        value: "24/7",
        label: "Infrastructure Linux"
    }
];

export default function Stats() {
    return (
        <FadeIn>

            <section className="py-24 px-6">

                <div
                    className="
                        max-w-6xl
                        mx-auto
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        gap-6
                    "
                >

                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="
                                bg-gray-900/40
                                border
                                border-gray-800
                                rounded-2xl
                                p-8
                                text-center
                            "
                        >

                            <h3
                                className="
                                    text-4xl
                                    font-black
                                    text-blue-400
                                "
                            >
                                {stat.value}
                            </h3>

                            <p className="text-gray-400 mt-2">
                                {stat.label}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

        </FadeIn>
    );
}