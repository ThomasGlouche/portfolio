export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/20 border-b border-white/5 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="font-bold text-xl">
                    Thomas.dev
                </h1>

                <div className="flex gap-6 text-gray-300">
                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>

                    <a href="#projects" className="hover:text-white transition">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}