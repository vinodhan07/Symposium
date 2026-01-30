import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="relative">
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px]"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl sm:text-5xl font-bold font-orbitron mb-4">
                    GET IN <span className="text-neon-blue">TOUCH</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold font-orbitron text-white mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-blue flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-neon-blue font-bold font-orbitron mb-1">Visit Us</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed font-inter">
                                        Knowledge Institute of Technology,<br />
                                        KIOT Campus, Kakapalayam (PO),<br />
                                        Salem - 637 504.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-purple flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-neon-purple font-bold font-orbitron mb-1">Call Us</h4>
                                    <p className="text-gray-300 text-sm font-inter mb-2">Student Co-ordinators:</p>
                                    <p className="text-white font-bold tracking-wide font-inter">+91 89460 92297 - Nega Sri R</p>
                                    <p className="text-white font-bold tracking-wide font-inter">+91 85085 13234 - Gowtham S</p>
                                    <p className="text-white font-bold tracking-wide font-inter">+91 82201 53508 - Sanjay A</p>
                                    <p className="text-white font-bold tracking-wide font-inter">+91 89250 84660 - Divakar Y N</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-pink flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-neon-pink font-bold font-orbitron mb-1">Email Us</h4>
                                    <a href="mailto:arivoli2k26@kiot.ac.in" className="text-gray-300 text-sm font-inter hover:text-neon-pink transition-colors">arivoli2k26@kiot.ac.in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps/place/Knowledge+Institute+of+Technology+(KIOT)/@11.5533648,78.0202518,596m/data=!3m1!1e3!4m6!3m5!1s0x3babe40754d8480f:0x4bf024dfe3e621ec!8m2!3d11.554069!4d78.0190263!16s%2Fm%2F0c01_6z!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block glass-card p-2 h-64 overflow-hidden relative group cursor-pointer"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.689617835848!2d77.9620073153676!3d11.56536699178923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe461e737194d%3A0x6b772023023e61c6!2sKnowledge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, pointerEvents: 'none' }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </a>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 lg:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none"></div>

                    <h3 className="text-2xl font-bold font-orbitron text-white mb-6 flex items-center gap-3">
                        <MessageSquare className="text-neon-blue" /> Send a Message
                    </h3>

                    <form action="mailto:arivoli2k26@kiot.ac.in" method="post" encType="text/plain" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1 font-inter">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all font-inter"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1 font-inter">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all font-inter"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 ml-1 font-inter">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Event Enquiry"
                                required
                                className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all font-inter"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 ml-1 font-inter">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="How can we help you?"
                                required
                                className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all font-inter resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold font-orbitron py-4 rounded-lg shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                        >
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            SEND MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
