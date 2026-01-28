import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Award, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold font-orbitron mb-4"
                    >
                        ABOUT <span className="text-neon-purple">THE EVENT</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>
                </div>

                {/* Event Poster Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-20 flex justify-center"
                >

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 neon-border"
                    >
                        <h3 className="text-2xl font-bold font-orbitron text-neon-blue mb-4">ARIVOLI'26</h3>
                        <p className="text-gray-300 leading-relaxed font-inter">
                            ARIVOLI'26 is a National Level Technical Symposium designed to showcase the future of technology.
                            It serves as a platform for students to exhibit their innovative ideas, technical skills, and creativity
                            through various technical and non-technical events. Join us in exploring the boundaries of AI, Robotics,
                            and Cyber-Tech.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-2xl font-bold font-orbitron text-neon-purple mb-4">KIOT</h3>
                        <p className="text-gray-300 leading-relaxed font-inter">
                            Knowledge Institute of Technology (KIOT), Salem is a premier institution approved by AICTE and affiliated to Anna University.
                            Accredited with NAAC 'A' Grade and NBA, KIOT is an Autonomous institution committed to excellence in engineering education.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: Globe, highlight: "Autonomous", sub: "Institution" },
                        { icon: Award, highlight: "NAAC A", sub: "Accredited" },
                        { icon: Cpu, highlight: "NBA", sub: "Approved" },
                        { icon: Zap, highlight: "AICTE", sub: "Approved" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-card p-6 rounded-lg border border-white/5 hover:border-neon-blue/50 transition-colors"
                        >
                            <item.icon className="w-10 h-10 mx-auto text-neon-blue mb-3" />
                            <h4 className="text-xl font-bold font-orbitron text-white">{item.highlight}</h4>
                            <p className="text-gray-400 text-sm font-inter">{item.sub}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold font-orbitron text-center mb-8">HOSTED BY DEPARTMENTS</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['CSE', 'IT', 'CSBS', 'AIDS'].map((dept) => (
                            <span key={dept} className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-neon-blue font-orbitron hover:bg-neon-blue hover:text-black transition-all cursor-default">
                                {dept}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
