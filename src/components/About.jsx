import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Award, Zap, Mail } from 'lucide-react';
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
                    ABOUT
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
                        through various technical and non-technical events.
                    </p>
                </div>

                <div className="glass-card p-8 border-neon-purple/50 relative group">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-purple mb-4 flex items-center">
                        <Award className="mr-3" /> KIOT
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-inter text-justify">
                        Knowledge Institute of Technology (KIOT), Salem, is a premier institution approved by AICTE and affiliated with Anna University. Accredited with NAAC ‘A’ Grade and NBA, KIOT is an autonomous institution committed to quality and innovation in engineering education.
                    </p>
                </div>
            </div>

            {/* Accreditation Marquee Section */}
            <div className="relative overflow-hidden py-16 mt-10">
                {/* Visual Fades for a premium look */}

                {/* The Marquee Container */}
                <div className="flex w-max whitespace-nowrap animate-marquee">
                    {[
                        { image: "/NAAC.png", highlight: "NAAC A", },
                        { image: "/nba-logo.png", highlight: "NBA",  },
                        { image: "/idealab.png", highlight: "IDEALAB",  },
                        { image: "/istart.png", highlight: "ISTART",  },
                        { image: "/IIC.png", highlight: "IIC",},
                        { image: "/ICTA.png", highlight: "ICTACADEMY",  },
                        { image: "/iste-logo.png", highlight: "ISTE", },
                        { image: "/IEEE.png", highlight: "IEEE", }
                    ].concat([
                        { image: "/NAAC.png", highlight: "NAAC A", },
                        { image: "/nba-logo.png", highlight: "NBA",  },
                        { image: "/idealab.png", highlight: "IDEALAB", },
                        { image: "/istart.png", highlight: "ISTART",  },
                        { image: "/IIC.png", highlight: "IIC", },
                        { image: "/ICTA.png", highlight: "ICTACADEMY",  },
                        { image: "/iste-logo.png", highlight: "ISTE", },
                        { image: "/IEEE.png", highlight: "IEEE", }
                    ]).map((item, index) => (
                        <div
                            key={index}
                            className="inline-flex flex-col items-center justify-center w-[200px] sm:w-[280px] px-2 sm:px-4 flex-shrink-0"
                        >
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white border-4 border-[#00d4ff] rounded-full mb-4 relative z-10 flex items-center justify-center overflow-hidden shadow-[0_4px_15px_rgba(0,212,255,0.3)]">
                                <img
                                    loading="lazy"
                                    src={item.image}
                                    alt={item.highlight}
                                    className="w-[90%] h-[90%] object-contain"
                                />
                            </div>
                            <h4 className="text-base sm:text-xl font-bold font-orbitron text-white text-center pb-0.5">{item.highlight}</h4>
                            <p className="text-gray-400 text-[10px] sm:text-sm font-inter text-center font-medium leading-tight">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <a
                    href="mailto:arivoli2k26@kiot.ac.in"
                    className="inline-flex items-center gap-3 text-neon-blue font-orbitron text-lg sm:text-xl font-bold transition-colors duration-300"
                >
                    <Mail className="w-6 h-6" />
                    arivoli2k26@kiot.ac.in
                </a>
            </div>
        </SectionWrapper>
    );
};

export default About;
