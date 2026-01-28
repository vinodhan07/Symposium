import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* College Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center mb-8 lg:mb-4 pt-2"
                >





                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left w-full"
                    >


                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-orbitron mb-4 leading-tight">
                            <span className="text-white">ARIVOLI</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">'26</span>
                        </h1>

                        <h2 className="text-sm sm:text-base md:text-xl font-orbitron text-gray-300 mb-6 tracking-wide leading-relaxed max-w-3xl mx-auto lg:mx-0">
                            A National Level Technical Symposium    <span className="hidden sm:inline text-neon-purple mx-2">|</span>
                            <span className="block sm:inline mt-1 sm:mt-0">
                                Event Proudly Organized by <span className="text-neon-blue font-bold">CSE, AI&DS, IT & CSBS</span>
                            </span>
                        </h2>

                        {/* Partner Logos */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 text-xs md:text-sm text-gray-400 font-orbitron uppercase tracking-widest">
                            <span className="border-b border-neon-blue/50 pb-1">ICT Academy</span>
                            <span className="text-neon-purple">•</span>
                            <span className="border-b border-neon-blue/50 pb-1">ISTE</span>
                            <span className="text-neon-purple">•</span>
                            <span className="border-b border-neon-blue/50 pb-1">IEEE Computer Society</span>
                        </div>
                        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 font-inter leading-relaxed">
                            Unleash the future at Knowledge Institute of Technology. Join us for a convergence of minds, technology, and innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10 text-gray-300 font-inter justify-center lg:justify-start text-sm md:text-base">
                            <div className="flex items-center justify-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-3 py-1 rounded-full text-xs font-bold font-orbitron shadow-[0_0_10px_rgba(234,179,8,0.3)] animate-pulse">
                                    5 LAKH+ CASH PRIZE
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Calendar className="text-neon-pink" size={20} />
                                <span>13th February 2026 (Friday)</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <MapPin className="text-neon-green" size={20} />
                                <span>KIOT Campus, Salem</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://docs.google.com/forms/d/1uVXQ8OrqTb2NiLTs8TKddSBBWQ3hhzsbGh1hUJIRwPQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 bg-neon-blue text-black font-bold font-orbitron rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2 group"
                            >
                                Register Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/rulebook.pdf"
                                download
                                className="w-full sm:w-auto px-8 py-3 border border-gray-600 hover:border-neon-purple hover:text-neon-purple text-gray-300 font-bold font-orbitron rounded-full transition-all flex items-center justify-center gap-2"
                            >
                                <Download size={20} />
                                Rulebook
                            </a>
                        </div>
                    </motion.div>

                    {/* Robot Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-0 flex justify-center lg:justify-end mt-8 lg:mt-0"
                    >
                        <img
                            src="/hero-robot.png"
                            alt="AI Robot"
                            className="w-full max-w-[200px] sm:max-w-[400px] lg:max-w-[500px] h-auto drop-shadow-[0_0_30px_rgba(0,243,255,0.2)] lg:drop-shadow-[0_0_50px_rgba(0,243,255,0.3)] animate-pulse-fast"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-neon-blue rounded-full"></div>
                </div>
                <span className="text-xs font-orbitron tracking-widest hidden sm:block">SCROLL</span>
            </motion.div>
        </section>
    );
};

export default Hero;
