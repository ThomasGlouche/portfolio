export default function Navbar() {
    return (
        <header
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                backdrop-blur-xl
                bg-black/20
                border-b
                border-white/5
            "
        >
            <nav
                className="
                    max-w-6xl
                    mx-auto
                    px-6
                    py-4
                    flex
                    justify-between
                    items-center
                "
            >
                <a
                    href="#"
                    className="font-bold text-xl tracking-tight"
                >
                    Thomas<span className="text-blue-500">.</span>
                </a>

                <div className="flex gap-6 text-sm text-gray-300">

                    <a
                        href="#about"
                        className="hover:text-white transition"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-white transition"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-white transition"
                    >
                        Contact
                    </a>

                    <a
                        href="https://github.com/ThomasGlouche"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>

                </div>
            </nav>
        </header>
    );
}