import { AnimatePresence, motion } from "framer-motion"; // Added AnimatePresence for smoother exit
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <nav className="fixed top-8 left-0 right-0 z-50 w-[90%] mx-auto rounded-4xl
                    bg-[#262625] backdrop-blur-md shadow-sm transition-all min-h-20 items-center justify-center px-5">

            <div className="flex justify-between items-center px-6 pt-5">

                {/* LEFT LOGO */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3"
                >
                    <div className="text-2xl md:text-3xl font-bold">
                        <span className="text-[#ffff]">Yash's</span>{" "}
                        <span className="text-[#f0b638]">Portfolio</span>
                    </div>
                </motion.div>

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex gap-8 list-none items-center font-medium text-[18px] text-white ml-auto">
                    {links.map((link) => (
                        <li key={link} className="relative group">
                            <a
                                href={`#${link}`}
                                className="hover:text-[#f0b638] transition-colors"
                            >
                                {link}
                            </a>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f0b638] 
                               group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </li>
                    ))}
                </ul>

                {/* MOBILE HAMBURGER BUTTON */}
                <div className="lg:hidden flex items-center ml-auto ">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col gap-1.5 p-2 focus:outline-none z-50"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-[#f0b638] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-[#f0b638] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-[#f0b638] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU LOGIC */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* 1. CLICK OUTSIDE LAYER (The Invisible Backdrop) */}
                        {/* This fixed div covers the whole screen. Clicking it closes the menu. */}
                        <div
                            className="fixed inset-0 z-40 bg-transparent h-screen w-screen  text-[#f0b638]"
                            onClick={() => setMenuOpen(false)}
                        ></div>

                        {/* 2. THE ACTUAL MENU */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-25 left-0 w-full lg:hidden z-50
                         bg-[#262625] backdrop-blur-xl
                         shadow-xl rounded-4xl overflow-hidden h-auto min-h-80"
                        >
                            <ul className="flex flex-col p-4 gap-4 font-medium text-white text-center">
                                {links.map((link) => (
                                    <li key={link} className=" border-[#f0b638] last:border-none pb-2 last:pb-0">
                                        <a
                                            href={`#${link}`}
                                            className="block hover:text-[#f0b638] transition-colors py-2"
                                            // 3. CLOSE MENU WHEN LINK IS CLICKED
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link}
                                        </a>

                                    </li>

                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;