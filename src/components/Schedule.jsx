import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Clock } from 'lucide-react';

const Schedule = () => {
    const scheduleItems = [
        { time: '09:00 AM', event: 'Inauguration', description: 'Opening ceremony with Chief Guest' },
        { time: '10:00 AM', event: 'Keynote Speech', description: 'Future of AI & Robotics' },
        { time: '11:00 AM', event: 'Technical Events Start', description: 'Paper Presentation, Coding, etc.' },
        { time: '01:00 PM', event: 'Lunch Break', description: 'Refreshments provided' },
        { time: '02:00 PM', event: 'Non-Technical Events', description: 'Gaming, Quiz, and Fun activities' },
        { time: '04:00 PM', event: 'Valedictory', description: 'Prize Distribution & Closing Ceremony' },
    ];

    return (
        <SectionWrapper id="schedule">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16">
                <span className="text-white">Event </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Timeline</span>
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue opacity-30 transform md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {scheduleItems.map((item, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start`}>
                            {/* Timeline Node */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bg-dark border-2 border-neon-blue rounded-full z-10 box-content">
                                <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-20"></div>
                            </div>

                            {/* Time - Desktop */}
                            <div className="hidden md:block w-1/2 px-8 text-right font-orbitron text-neon-blue text-xl font-bold">
                                {index % 2 === 0 ? item.time : ''}
                            </div>
                            <div className="hidden md:block w-1/2 px-8 text-left font-orbitron text-neon-blue text-xl font-bold">
                                {index % 2 !== 0 ? item.time : ''}
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-1/2 px-12 md:px-8 mt-2 md:mt-0">
                                <div className="glass-card p-6 hover:border-neon-blue/50 transition-colors group">
                                    <div className="md:hidden text-neon-blue font-orbitron font-bold mb-2 flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {item.time}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{item.event}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Schedule;
