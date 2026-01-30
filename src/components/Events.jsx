import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, PenTool, Database, Cpu, Gamepad2, Mic2, Zap, Award, Puzzle, X, CheckCircle, User, Phone, Brain, CircuitBoard, Trophy, Layers, FileText } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Events = () => {
    const [activeTab, setActiveTab] = useState('technical');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = {
        technical: [
            {
                title: "Project Expo",
                desc: "Showcase your innovations",
                icon: Cpu,
                details: {
                    description: "Showcase innovative student projects aligned with UN SDGs, focusing on real-world solutions, creativity, and sustainability.",
                    image: "/project-expo.jpg",
                    rules: {
                        "Key Rules": [
                            "Team: 2–4 members | Max 60 teams",
                            "Bring laptop & college ID",
                            "Project must be working & demonstrable",
                            "One-page write-up mandatory",
                            "Certificates for physical participation only",
                            "Follow allotted time slot",
                            "Decision of organizers is final"
                        ]
                    },
                    coordinators: [
                        { name: "Gowri R", phone: "90258 28286" },
                        { name: "Nishanth M", phone: "93457 87079" }
                    ]
                }
            },
            {
                title: "Error 404",
                desc: "Capture The Flag (CTF)",
                icon: Terminal,
                details: {
                    description: "ERROR 404 is a Capture The Flag (CTF) event that tests participants’ cybersecurity, logical thinking, and problem-solving skills through security-based challenges.",
                    image: "/error-404.png",
                    rules: {
                        "Rules & Regulations": [
                            "CTF-based competition",
                            "Challenges include Web, Crypto, Forensics, OSINT, and Security",
                            "Individual or team participation",
                            "No flag sharing or external help",
                            "No unfair methods or platform attacks",
                            "Points for correct submissions",
                            "Cheating leads to disqualification",
                            "Organizers’ decision is final"
                        ]
                    },
                    coordinators: [
                        { name: "Mohamed Jalaludeen", phone: "95668 93337" },
                        { name: "Vignesh T", phone: "80159 78929" },
                        { name: "Jaishree M", phone: "93447 21040" },
                        { name: "Sugantha A", phone: "81485 31845" },
                        { name: "Vikranth v", phone: "95009 51199" },
                        { name: "Sudheksha S", phone: "63694 50687" }
                    ]
                }
            },
            {
                title: "Coding Maniac",
                desc: "Competitive Coding",
                icon: Code2,
                details: {
                    description: "Coding Maniac is a competitive coding event that tests participants’ programming skills, logical thinking, and problem-solving abilities through MCQ, debugging, and coding challenges.",
                    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000",
                    rules: {
                        "Guidelines": [
                            "Two rounds: MCQ & Debugging, and Coding",
                            "Only shortlisted candidates move to Round 2",
                            "Languages allowed: C, Java, Python",
                            "No negative or partial marking",
                            "No malpractice allowed",
                            "Duration: 2 hours"
                        ],
                        "Note": ["Top performers will be awarded"]
                    },
                    coordinators: [
                        { name: "Pragadeeshwaran R", phone: "+91 73395 83589" },
                        { name: "Kaviya GS", phone: "+91 98946 53709" },
                        { name: "Ramkumar R", phone: "+91 63804 45757" },
                        { name: "Priyadharshini S", phone: "+91 63817 28415" },
                        { name: "Harshanth V", phone: "+91 84383 86610" },
                        { name: "Karthiga sree Suresh", phone: "+91 90805 58409" }
                    ]
                }
            },
            {
                title: "Next Gen Talks",
                desc: "Technical Paper Presentation",
                icon: PenTool,
                details: {
                    description: "Present innovative ideas and research in AI & Data Science, focusing on next-generation technologies.",
                    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
                    rules: {
                        "Quick Rules": [
                            "Team: 3–4 members",
                            "Time: 5–7 min presentation + 2 min Q&A",
                            "Format: PPT (Max 8 slides)",
                            "Theme: AI & Data Science",
                            "Evaluation: Innovation, technical depth & clarity"
                        ]
                    },
                    coordinators: [
                        { name: "Padma Sree R", phone: "86681 67630" },
                        { name: "Umamaheswari A", phone: "78240 47887" },
                        { name: "Sabitha DR", phone: "93600 31427" }
                    ]
                }
            },
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
            {
                title: "LLM Powered AI Chatbot",
                desc: "LLM Powered AI Chatbot",
                icon: Brain,
                details: {
                    description: "Hands-on workshop on building LLM-based chatbots, covering prompt design, backend integration, and cloud deployment using real-world architectures.",
                    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
                    rules: {
                        "Key Rules": [
                            "Pre-registration mandatory (only this workshop)",
                            "Full attendance required for certification",
                            "No late entry",
                            "Bring laptop + stable internet",
                            "Maintain discipline & decorum",
                            "Organizers’ decision is final"
                        ]
                    },
                    coordinators: [
                        { name: "Rajvenkadam S", phone: "96297 98166" },
                        { name: "Tamil Selvan", phone: "80564 67991" },
                        { name: "Preethi S", phone: "63817 28415" },
                        { name: "Yuvasri.G", phone: "99522 48022" },
                        { name: "Naveen K", phone: "8428603024" },
                        { name: "Miruthula", phone: "90952 94181" }
                    ]
                }
            },
            {
                title: "AI Tools & Prompt Engineering",
                desc: "AI Tools & Prompt Engineering",
                icon: Zap,
                details: {
                    description: "An interactive workshop introducing AI concepts, tools, chatbots, and prompt engineering through real-world examples and hands-on learning. No prior experience required.",
                    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
                    resourcePerson: "VijayaKumar Manickavasagam, Technology Analyst, Infosys",
                    rules: {
                        "Key Details": [
                            "Max participants: 75",
                            "Registration & attendance mandatory",
                            "Certificates for attendees only",
                            "Bring college ID & laptop",
                            "Lunch provided",
                            "No participation in other events",
                            "Maintain proper decorum"
                        ]
                    },
                    coordinators: [
                        { name: "Dinesh S J", phone: "63836 43002" },
                        { name: "Kowsika", phone: "81228 70034" }
                    ]
                }
            },
        ],
        nonTechnical: [
            {
                title: "IPL Auction",
                desc: "Build your dream team",
                icon: Award,
                details: {
                    description: "Experience the thrill of an IPL-style auction! Build your dream team using smart bidding, strategy, and cricket knowledge.",
                    image: "/ipl-auction.jpg",
                    rules: {
                        "Quick Rules": [
                            "Fixed virtual budget per team",
                            "Players bought via bidding only",
                            "Follow player limits & time slots",
                            "No external help; fair play mandatory",
                            "Judged on team balance & budget usage",
                            "Judges’ decision is final"
                        ]
                    },
                    coordinators: [
                        { name: "Gokula Krishnan V", phone: "63812 41116" },
                        { name: "Harish R", phone: "95009 17119" }
                    ]
                }
            },
            {
                title: "Ad Mad",
                desc: "Marketing Madness",
                icon: Mic2,
                details: {
                    description: "A fun non-technical event where participants create and perform a short, original advertisement for a given product, testing creativity, communication, and confidence.",
                    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000",
                    rules: {
                        "Quick Rules": [
                            "Individual or 2-member teams",
                            "On-spot product will be given",
                            "Limited prep & performance time",
                            "Original ads only (name, slogan & features)",
                            "Acting encouraged; no mobiles/internet",
                            "Judged on creativity & presentation",
                            "Judges’ decision is final"
                        ]
                    },
                    coordinators: [
                        { name: "Manjusri S", phone: "90430 38932" },
                        { name: "Lalith Sanjaai S", phone: "93621 19144" },
                        { name: "Anitha S", phone: "75503 71716" },
                        { name: "Kamaraj D", phone: "96290 84306" },
                        { name: "Surya Karthikeyan V S", phone: "90436 47016" },
                        { name: "Sivamithra", phone: "98942 84848" }
                    ]
                }
            },
            {
                title: "Minute to Win It",
                desc: "Fun Challenges",
                icon: Gamepad2,
                details: {
                    description: "A fast-paced event where participants complete fun challenges in under 60 seconds, testing speed, skill, and creativity.",
                    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000",
                    rules: {
                        "Quick Rules": [
                            "60 seconds per game",
                            "Play solo (or 2-member teams for select games)",
                            "Use only provided objects",
                            "Restart if items fall or break",
                            "Task must be fully completed to win",
                            "Games assigned on the spot"
                        ]
                    },
                    coordinators: [
                        { name: "Bharath Kumar S.M", phone: "90251 73586" },
                        { name: "Hrishi A", phone: "93603 58658" }
                    ]
                }
            },
            {
                title: "Mind Puzzle",
                desc: "Brain Teasers",
                icon: Puzzle,
                details: {
                    description: "A fun puzzle challenge that tests logic, creativity, and thinking speed through smart and tricky tasks.",
                    image: "/mind-puzzle.jpg",
                    rules: {
                        "Quick Rules": [
                            "Eyes open at all times",
                            "No external help",
                            "Winners decided by fastest completion",
                            "Maintain discipline & fair play",
                            "Judges’ decision is final"
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
        <SectionWrapper id="events">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold font-orbitron mb-4">
                    EVENTS
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full"></div>
            </div>

            <div className="flex justify-center mb-12 flex-wrap gap-4">
                {[
                    { id: 'technical', label: 'Technical', icon: CircuitBoard },
                    { id: 'workshops', label: 'Workshops', icon: Layers },
                    { id: 'nonTechnical', label: 'Non-Technical', icon: Trophy }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full font-orbitron font-bold transition-all flex items-center gap-2 ${activeTab === tab.id
                            ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(0,212,255,0.4)] transform scale-105'
                            : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-neon-blue/50'
                            }`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events[activeTab]?.map((event, index) => (
                    <motion.div
                        key={index}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedEvent(event)}
                        className="glass-card p-6 group hover:border-neon-blue/50 transition-colors relative overflow-hidden cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-neon-blue/10 transition-all"></div>

                        <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-neon-blue group-hover:scale-110 group-hover:bg-neon-blue group-hover:text-black transition-all duration-300">
                            <event.icon size={28} />
                        </div>

                        <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-neon-blue transition-colors">{event.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 font-inter leading-relaxed">{event.desc}</p>

                        <div className="flex items-center text-sm text-neon-blue font-bold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            View Details &rarr;
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
            </AnimatePresence>
        </SectionWrapper>
    );
};

const EventModal = ({ event, onClose }) => {
    React.useEffect(() => {
        // Disable scrolling when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            // Re-enable scrolling when modal is closed
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Use ReactDOM.createPortal to render the modal outside the current DOM hierarchy (in document.body)
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="bg-bg-dark border border-neon-blue/30 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative z-10 shadow-[0_0_50px_rgba(0,212,255,0.15)] flex flex-col md:flex-row"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 transition-all z-50"
                >
                    <X size={24} />
                </button>

                {/* Image/Icon Section */}
                <div className="w-full md:w-2/5 relative h-48 md:h-auto bg-black flex items-center justify-center overflow-hidden">
                    {event.details?.image ? (
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent z-10"></div>
                            <img
                                loading="lazy"
                                src={event.details.image}
                                alt={event.title}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-grid-pattern">
                            <div className="absolute inset-0 bg-neon-blue/5"></div>
                            <event.icon size={120} className="text-neon-blue opacity-20 animate-pulse" />
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto custom-scrollbar bg-bg-dark">
                    <h3 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-2">{event.title}</h3>
                    <p className="text-neon-blue font-orbitron text-sm mb-8 uppercase tracking-wider font-bold">{event.desc}</p>

                    {event.details ? (
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                                    <Zap size={18} className="text-yellow-400" /> Description
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-inter">
                                    {event.details.description}
                                </p>
                            </div>

                            {event.details.resourcePerson && (
                                <div>
                                    <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                                        <User size={18} className="text-neon-blue" /> Resource Person
                                    </h4>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all group/rp">
                                        <p className="text-white font-bold font-orbitron">{event.details.resourcePerson.split(',')[0].trim()}</p>
                                        <p className="text-gray-400 text-xs mt-1 font-inter">{event.details.resourcePerson.split(',').slice(1).join(',').trim()}</p>
                                    </div>
                                </div>
                            )}

                            {event.details.rules && Object.entries(event.details.rules).map(([category, items]) => (
                                <div key={category}>
                                    <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                                        <CheckCircle size={18} className="text-neon-green" /> {category}
                                    </h4>
                                    <ul className="space-y-2">
                                        {items.map((rule, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm text-gray-400 font-inter">
                                                <span className="text-neon-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0"></span>
                                                <span>{rule}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {event.details.coordinators && (
                                <div>
                                    <h4 className="text-lg font-bold font-orbitron text-white mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                                        <User size={18} className="text-neon-purple" /> Event Coordinators
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {event.details.coordinators.map((coord, idx) => (
                                            <div key={idx} className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-white/20 transition-all">
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <a
                                    href="/arivoli2k26.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 text-center bg-white/5 border-2 border-neon-purple hover:bg-neon-purple/10 text-neon-purple font-bold font-orbitron rounded-xl hover:shadow-[0_0_30px_rgba(188,19,254,0.3)] transition-all transform hover:-translate-y-1 uppercase tracking-widest"
                                >
                                    <FileText size={20} />
                                    Open Rule Book
                                </a>
                                <a
                                    href="#register"
                                    onClick={onClose}
                                    className="w-full py-4 text-center bg-neon-blue hover:bg-white text-black font-bold font-orbitron rounded-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all transform hover:-translate-y-1 uppercase tracking-widest cursor-pointer"
                                >
                                    Register for Event
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-white/20 rounded-xl">
                            <p className="text-gray-500 italic mb-4">Detailed information for this event will be updated soon.</p>
                            <button className="px-6 py-2 border border-neon-blue text-neon-blue rounded-full hover:bg-neon-blue hover:text-black transition-colors font-bold font-orbitron text-sm">
                                Notify Me
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

export default Events;
