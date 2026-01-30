import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Events', href: '#events' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Active link detection
            const sections = navLinks.map(link => link.name);
            for (const section of sections) {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]); // Removed activeLink from dependency array to avoid unnecessary re-renders

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-bg-dark/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,212,255,0.1)]' : 'py-4 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/kiot-header.png"
                            alt="Knowledge Institute of Technology"
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeLink === link.name
                                        ? 'text-neon-blue drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]'
                                        : 'text-gray-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]'
                                        }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {activeLink === link.name && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue shadow-[0_0_10px_#00d4ff]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </a>
                            ))}
                            <a
                                href="#register"
                                className="ml-4 px-6 py-2 bg-transparent border border-neon-blue text-neon-blue font-orbitron font-bold rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.2)] hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                            >
                                REGISTER
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neon-blue transition-colors"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-neon-blue transition-all duration-300 pl-4"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#register"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-4 px-6 py-3 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 text-white font-orbitron font-bold rounded-lg shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                            >
                                REGISTER NOW
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
