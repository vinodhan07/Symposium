import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Speakers = () => {
    const speakers = [
        {
            name: "Dr. Sarah Connor",
            role: "AI Research Lead",
            company: "Cyberdyne Systems",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
            topic: "The Future of Autonomous AI"
        },
        {
            name: "Mr. Tony Stark",
            role: "Chief Engineer",
            company: "Stark Industries",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
            topic: "Robotics in Daily Life"
        },
        {
            name: "Ms. Ada Lovelace",
            role: "Software Architect",
            company: "Babbage Engines",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
            topic: "Algorithm Bias & Ethics"
        }
    ];

    return (
        <SectionWrapper id="speakers" className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl sm:text-5xl font-bold font-orbitron mb-4">
                    EMINENT <span className="text-neon-blue">SPEAKERS</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {speakers.map((speaker, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="glass-card group relative overflow-hidden text-center p-0"
                    >
                        {/* Image Banner */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent z-10"></div>
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 p-6 -mt-12">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full p-1 bg-gradient-to-r from-neon-blue to-neon-purple">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full rounded-full object-cover border-4 border-bg-dark"
                                />
                            </div>

                            <h3 className="text-xl font-bold font-orbitron text-white mb-1 group-hover:text-neon-blue transition-colors">{speaker.name}</h3>
                            <p className="text-blue-400 text-sm font-bold mb-1">{speaker.role}</p>
                            <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">{speaker.company}</p>

                            <div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
                                <p className="text-gray-300 text-sm font-inter">
                                    <span className="text-neon-purple font-bold block text-xs mb-1">SESSION ON</span>
                                    "{speaker.topic}"
                                </p>
                            </div>

                            <div className="flex justify-center gap-4">
                                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><ExternalLink size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Speakers;
