import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-bg-dark border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand & Socials */}
                    <div>
                        <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
                            ARIVOLI<span className="text-neon-purple">'26</span>
                        </h2>
                        <p className="text-gray-400 mb-6 font-inter">
                            Explore the future of innovation at our National Level Technical Symposium.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Twitter, Mail].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-blue hover:text-black transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3 font-inter text-gray-400">
                            <li><a href="#about" className="hover:text-neon-blue transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-neon-blue transition-colors">Events</a></li>
                            <li><a href="#register" className="hover:text-neon-blue transition-colors">Registration</a></li>
                            <li><a href="/rulebook.pdf" className="hover:text-neon-blue transition-colors">Rulebook</a></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Locate Us</h3>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 h-48 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.689617835848!2d77.9620073153676!3d11.56536699178923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe461e737194d%3A0x6b772023023e61c6!2sKnowledge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 font-inter text-sm">
                    <p className="mb-2">© ARIVOLI'26. All Rights Reserved.</p>
                    <p className="flex items-center justify-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-neon-blue">KIOT Tech Team</span>
                    </p>
                    <p className="mt-4 text-xs italic opacity-50">"All event themes are mentioned in the rulebook"</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
