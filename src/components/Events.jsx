import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, PenTool, Database, Cpu, Gamepad2, Mic2, Zap, Award, Puzzle, X, CheckCircle, Smartphone, User, Phone } from 'lucide-react';

const Events = () => {
    const [activeTab, setActiveTab] = useState('technical');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = {
        technical: [
            { title: "Project Expo", desc: "Showcase your innovations", icon: Cpu },
            { title: "Error 404", desc: "Capture The Flag (CTF)", icon: Terminal },
            { title: "Coding Maniac", desc: "Competitive Coding", icon: Code2 },
            { title: "Paper Presentation", desc: "Share your research", icon: PenTool },
        ],
        workshops: [
            {
                title: "Code to Career",
                desc: "Career Guidance",
                icon: Database,
                details: {
                    description: "Code to Career is a full-day, idea-driven session designed to help students understand how coding knowledge evolves into a successful career. 💡 The session focuses on building the right mindset, gaining real-world industry insights, and identifying essential technical and professional skills required to transition from academics to corporate and startup environments.",
                    image: "/code-to-career.png",
                    rules: {
                        "Registration & Participation": [
                            "Participants must register within the specified deadline.",
                            "The maximum number of participants allowed is 75.",
                            "Participants should not register for any other events scheduled at the same time."
                        ],
                        "Attendance & Certification": [
                            "This is a full-day session; attendance is mandatory for the entire duration.",
                            "Certificates will be provided only to participants who attend the complete session.",
                            "Late entry or early exit may not be permitted."
                        ],
                        "Code of Conduct": [
                            "Participants must report to the venue on time.",
                            "Proper discipline and respectful behavior must be maintained.",
                            "Mobile phones should be kept in silent mode to avoid disturbances."
                        ],
                        "Workshop Requirements": [
                            "Wearing a college ID card is mandatory.",
                            "Participants must bring their own laptops.",
                            "Lunch will be provided.",
                            "For any queries, participants may contact the event coordinators."
                        ]
                    },
                    coordinators: [
                        { name: "Naga Gayathri", phone: "90425 87165" },
                        { name: "Kanishk", phone: "93442 67139" }
                    ]
                }
            },
            { title: "LLM Chatbot", desc: "Build AI Models", icon: Cpu },
            { title: "AI Tools", desc: "Prompt Engineering", icon: Zap },
        ],
        nonTechnical: [
            {
                title: "IPL Auction",
                desc: "Build your dream team",
                icon: Award,
                details: {
                    description: "Experience the excitement of an IPL auction! 🏏🔥 IPL Auction lets you build your dream team using strategy, smart bidding, and quick decisions. Test your cricket knowledge, budget management, and auction skills in this fun and competitive event. Simple to play, thrilling to compete and a must for every cricket fan!",
                    image: "/ipl-auction.jpg",
                    rules: {
                        "Rules & Regulations": [
                            "Participants must follow the instructions given before each round.",
                            "Each team will be given a fixed virtual budget.",
                            "Players must be bought only through bidding (highest bid wins).",
                            "A team must follow minimum and maximum player limits.",
                            "Budget once spent cannot be exceeded.",
                            "No external help or discussion during the auction.",
                            "Decisions must be made within the given time limit.",
                            "Fair play is mandatory; misconduct leads to disqualification.",
                            "Winners will be decided based on team balance, budget usage, and performance criteria.",
                            "Judges’ decision will be final."
                        ],
                        "Important Note": [
                            "🚨Decisions are subject to change based on event requirements.🚨"
                        ]
                    },
                    coordinators: [
                        { name: "Gokula Krishnan V", phone: "63812 41116" },
                        { name: "Harish R", phone: "95009 17119" }
                    ]
                }
            },
            { title: "Ad Mad", desc: "Marketing Madness", icon: Mic2 },
            { title: "Minute to Win It", desc: "Fun Challenges", icon: Gamepad2 },
            {
                title: "Mind Puzzle",
                desc: "Brain Teasers",
                icon: Puzzle,
                details: {
                    description: "Get ready to twist your brain and tickle your thoughts! 🧠✨ This puzzle game is packed with clever challenges that test your logic, boost your creativity, and keep you smiling while you think. Each level is a new surprise—easy to start, tricky to master, and super fun to solve. Perfect for players who love thinking smart and playing hard!",
                    image: "/mind-puzzle.jpg",
                    rules: {
                        "Rules": [
                            "Eyes must remain open – closing eyes is not allowed.",
                            "No help from friends during the game.",
                            "Winners will be decided based on the best completion time.",
                            "Do not push or disturb other players.",
                            "Judges’ decision will be final."
                        ]
                    },
                    coordinators: [
                        { name: "Ashiq S", phone: "88384 16729" },
                        { name: "Monica D", phone: "73394 49202" }
                    ]
                }
            }
        ]
    };

    return (
        <section id="events" className="py-20 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-orbitron mb-4">EVENT <span className="text-neon-pink">DOMAINS</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto"></div>
                </div>

                <div className="flex justify-center mb-12 flex-wrap gap-4">
                    {[
                        { id: 'technical', label: 'Technical' },
                        { id: 'workshops', label: 'Workshops' },
                        { id: 'nonTechnical', label: 'Non-Technical' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-full font-orbitron font-bold transition-all ${activeTab === tab.id
                                ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events[activeTab]?.map((event, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card p-6 group hover:border-neon-blue/50 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-neon-blue/20 transition-all"></div>

                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-neon-blue group-hover:scale-110 transition-transform">
                                <event.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-neon-blue transition-colors">{event.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 font-inter">{event.desc}</p>

                            <button
                                onClick={() => setSelectedEvent(event)}
                                className="text-sm text-neon-blue hover:text-white font-bold transition-colors flex items-center gap-1 cursor-pointer"
                            >
                                View Rules &rarr;
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-bg-card border border-neon-blue/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-[0_0_50px_rgba(0,243,255,0.15)] flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 transition-all z-20"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-2/5 relative min-h-[200px] md:min-h-full">
                                {selectedEvent.details?.image ? (
                                    <img
                                        src={selectedEvent.details.image}
                                        alt={selectedEvent.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                                        <selectedEvent.icon size={64} className="text-neon-blue opacity-50" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-3/5 p-6 md:p-8">
                                <h3 className="text-3xl font-bold font-orbitron text-white mb-2">{selectedEvent.title}</h3>
                                <p className="text-neon-blue font-orbitron text-sm mb-6 uppercase tracking-wider">{selectedEvent.desc}</p>

                                {selectedEvent.details ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2">
                                                <Zap size={18} className="text-yellow-400" /> Description
                                            </h4>
                                            <p className="text-gray-300 text-sm leading-relaxed font-inter">
                                                {selectedEvent.details.description}
                                            </p>
                                        </div>

                                        {selectedEvent.details.rules && Object.entries(selectedEvent.details.rules).map(([category, items]) => (
                                            <div key={category}>
                                                <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2">
                                                    <CheckCircle size={18} className="text-neon-green" /> {category}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {items.map((rule, idx) => (
                                                        <li key={idx} className="flex gap-2 text-sm text-gray-400 font-inter">
                                                            <span className="text-neon-blue mt-1">•</span>
                                                            <span>{rule}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {selectedEvent.details.coordinators && (
                                            <div>
                                                <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2">
                                                    <User size={18} className="text-neon-purple" /> Event Coordinators
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {selectedEvent.details.coordinators.map((coord, idx) => (
                                                        <div key={idx} className="bg-white/5 p-3 rounded-lg flex items-center gap-3 border border-white/5">
                                                            <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                                                                <Phone size={18} />
                                                            </div>
                                                            <div>
                                                                <p className="text-white font-bold text-sm">{coord.name}</p>
                                                                <a href={`tel:${coord.phone}`} className="text-gray-400 text-xs hover:text-white transition-colors">{coord.phone}</a>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <a
                                            href="https://docs.google.com/forms/d/1uVXQ8OrqTb2NiLTs8TKddSBBWQ3hhzsbGh1hUJIRwPQ/viewform"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-4 text-center bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold font-orbitron rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all transform hover:-translate-y-1 mt-8"
                                        >
                                            REGISTER FOR EVENT
                                        </a>
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-gray-500 italic">Detailed information for this event will be updated soon.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Events;
