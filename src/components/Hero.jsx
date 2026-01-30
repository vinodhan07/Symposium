import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, MapPin, Download, Bot } from 'lucide-react';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target date: Feb 13, 2026
        const targetDate = new Date('2026-02-13T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 sm:mx-4">
            <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-bg-card backdrop-blur-md rounded-lg border border-neon-blue/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                    <span className="text-2xl sm:text-3xl font-orbitron font-bold text-white neon-text">{value < 10 ? `0${value}` : value}</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full border border-neon-blue rounded-lg opacity-20 animate-pulse"></div>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 mt-2 font-inter uppercase tracking-wider">{label}</span>
        </div>
    );

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-12 md:pt-16 overflow-hidden">
            {/* Robot Image - Background */}


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">



                <div className="flex flex-col items-center mb-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center flex-wrap"
                    >
                        <img
                            src="/arivoli-logo.png"
                            alt="ARIVOLI '26"
                            className="w-full max-w-[90vw] md:max-w-4xl h-auto object-contain drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg lg:text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue tracking-[0.15em] sm:tracking-[0.2em] text-center px-4 max-w-4xl mx-auto"
                        style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.3)' }}>
                        NATIONAL LEVEL TECHNICAL SYMPOSIUM 2K'26
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-4 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] sm:text-xs font-orbitron text-neon-blue tracking-widest uppercase opacity-80">
                            HOSTED BY THE DEPARTMENTS OF
                        </span>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-8 items-center">
                            {['CSE', 'IT', 'CSBS', 'AND', 'AI&DS'].map((dept, idx) => (
                                <React.Fragment key={dept}>
                                    <span className="text-white font-orbitron font-bold text-sm sm:text-lg tracking-widest hover:text-neon-blue transition-colors cursor-default neon-text-small">
                                        {dept}
                                    </span>
                                    {idx !== 3 && (
                                        <span className="w-1 h-1 rounded-full bg-neon-blue/40 shadow-[0_0_5px_rgba(0,212,255,0.5)]"></span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg text-gray-300 max-w-2xl mb-6 font-inter leading-relaxed"
                >
                    Experience the convergence of <span className="text-neon-purple font-bold">Innovation</span> and <span className="text-neon-blue font-bold">Intelligence</span>.
                    <p>Join us for the ultimate tech fest hosted by KIOT.</p>
                </motion.p>

                {/* Event Details - Enhanced Visibility */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8"
                >
                    <div className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 group shadow-[0_0_10px_rgba(0,212,255,0.1)]">
                        <div className="p-1.5 mr-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                            <Calendar className="w-5 h-5 text-neon-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                        </div>
                        <span className="text-white font-orbitron font-bold text-sm sm:text-base tracking-wider">February 13, 2026</span>
                    </div>

                    <div className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 group shadow-[0_0_10px_rgba(0,212,255,0.1)]">
                        <div className="p-1.5 mr-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                            <MapPin className="w-5 h-5 text-neon-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                        </div>
                        <span className="text-white font-orbitron font-bold text-sm sm:text-base tracking-wider">KIOT Campus, Salem</span>
                    </div>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center mb-8"
                >
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Mins" />
                    <TimeUnit value={timeLeft.seconds} label="Secs" />
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdA9IrRGBZuqQe8oioE-fbSp9CK9H4hYyGi_2HjGw0d2VenEA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-8 py-4 bg-neon-blue text-black font-bold font-orbitron rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    >
                        <span className="relative flex items-center justify-center">
                            REGISTER NOW <ChevronRight className="ml-2 w-5 h-5" />
                        </span>
                    </a>

                    <a
                        href="/arivoli2k26.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-8 py-4 bg-transparent border border-white/20 text-white font-bold font-orbitron rounded-xl overflow-hidden"
                    >
                        <span className="relative flex items-center justify-center">
                            DOWNLOAD BROCHURE <Download className="ml-2 w-5 h-5" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
