import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Award, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-4"
                >
                    ABOUT <span className="text-neon-purple">THE EVENT</span>
                </motion.h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-px bg-neon-blue/30"></div>

                <div className="glass-card p-8 neon-border relative group">
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-neon-blue rounded-tl-lg"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-neon-blue rounded-br-lg"></div>

                    <h3 className="text-2xl font-bold font-orbitron text-neon-blue mb-4 flex items-center">
                        <Zap className="mr-3" /> ARIVOLI'26
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-inter text-justify">
                        ARIVOLI'26 is a National Level Technical Symposium designed to showcase the future of technology.
                        It serves as a platform for students to exhibit their innovative ideas, technical skills, and creativity
                        through various technical and non-technical events. Join us in exploring the boundaries of AI, Robotics,
                        and Cyber-Tech.
                    </p>
                </div>

                <div className="glass-card p-8 border-neon-purple/50 relative group hover:border-neon-purple transition-all">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-purple mb-4 flex items-center">
                        <Award className="mr-3" /> KIOT
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-inter text-justify">
                        Knowledge Institute of Technology (KIOT), Salem is a premier institution approved by AICTE and affiliated to Anna University.
                        Accredited with NAAC 'A' Grade and NBA, KIOT is an Autonomous institution committed to excellence in engineering education.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                    { image: "/kiot-logo.png", highlight: "Autonomous", sub: "Institution" },
                    { image: "/naac.jpeg", highlight: "NAAC A", sub: "Accredited" },
                    { image: "/nba.jpeg", highlight: "NBA", sub: "Approved" },
                    { image: "/idealab.jpeg", highlight: "AICTE", sub: "Approved" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-neon-blue/50 transition-all hover:transform hover:-translate-y-2 group shadow-lg overflow-hidden relative flex flex-col items-center justify-center min-h-[240px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-28 h-28 mb-4 relative z-10 flex items-center justify-center transition-colors overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.highlight}
                                className="w-full h-full object-cover rounded-full filter group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h4 className="text-xl font-bold font-orbitron text-white relative z-10">{item.highlight}</h4>
                        <p className="text-gray-400 text-sm font-inter mt-1 relative z-10">{item.sub}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <h3 className="text-xl font-bold font-orbitron text-gray-400 mb-8 tracking-widest">HOSTED BY DEPARTMENTS</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {['CSE', 'IT', 'CSBS', 'AI&DS'].map((dept) => (
                        <div key={dept} className="relative group px-8 py-3 bg-bg-dark rounded-full overflow-hidden border border-neon-blue/30 hover:border-neon-blue transition-all cursor-crosshair">
                            <span className="relative z-10 font-orbitron font-bold text-white group-hover:text-black transition-colors">{dept}</span>
                            <div className="absolute inset-0 bg-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
