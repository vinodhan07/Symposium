import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-20 -left-20 w-60 h-60 bg-neon-blue/5 rounded-full blur-[80px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start">
                            <span className="font-orbitron font-bold text-2xl tracking-wider text-white">
                                ARIVOLI<span className="text-neon-blue">'26</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-inter">
                            A National Level Technical Symposium hosted by the Department of CSE, IT, CSBS & AI&DS. Unleash your potential in the era of Technical World.
                        </p>
                        <div className="flex space-x-4 pt-2 justify-center md:justify-start">
                            <a
                                href="https://www.linkedin.com/school/infokiot/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-neon-blue/30 shadow-sm hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-6 border-l-4 border-neon-blue pl-3">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'Events', href: '#events' },
                                { name: 'Schedule', href: '#schedule' },
                                { name: 'About', href: '#about' },
                                { name: 'Contact', href: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group font-inter text-sm">
                                        <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-6 border-l-4 border-neon-blue pl-3">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-neon-blue w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-400 text-sm font-inter">
                                    Knowledge Institute of Technology,<br />
                                    Kakapalayam (PO), Salem - 637 504.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-neon-blue w-5 h-5 mr-3 flex-shrink-0" />
                                <a href="mailto:arivoli2k26@kiot.ac.in" className="text-gray-400 text-sm font-inter hover:text-neon-blue transition-colors">arivoli2k26@kiot.ac.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0 font-inter">
                        © 2026 ARIVOLI. All rights reserved.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 font-inter">
                        <span>Designed with <Heart className="inline w-4 h-4 text-neon-pink mx-1 animate-pulse" /> by <span className="text-neon-blue font-bold">K</span><span className="text-white font-bold">I</span><span className="text-neon-blue font-bold">O</span><span className="text-white font-bold">T</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
