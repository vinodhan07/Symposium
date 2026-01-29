import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Events', href: '#events' },
        { name: 'Schedule', href: '#schedule' }, // Added Schedule
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-bg-dark/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,243,255,0.1)]' : 'py-4 bg-transparent'
                }`}
        >
            <div className="max-w-[98%] mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-2 sm:mr-3 relative transform group-hover:scale-105 transition-transform duration-300">
                            <img
                                src="/kiot-logo.png"
                                alt="KIOT Logo"
                                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                            />
                        </div>
                        <span className="font-orbitron font-bold text-[10px] sm:text-sm md:text-base tracking-widest text-white group-hover:text-neon-blue transition-colors duration-300 uppercase whitespace-nowrap">
                            Knowledge Institute Of Technology
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group overflow-hidden"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                                    <span className="absolute inset-0 bg-neon-blue/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-md"></span>
                                </a>
                            ))}
                            <a
                                href="#register"
                                className="ml-4 px-6 py-2 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-orbitron font-bold rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]"
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
                                className="block w-full text-center mt-4 px-6 py-3 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 text-white font-orbitron font-bold rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.1)]"
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
