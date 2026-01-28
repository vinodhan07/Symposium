import React from 'react';
import { Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const coordinators = [
        { name: "Nega Sri R", phone: "8946092297" },
        { name: "Gowtham S", phone: "8508513234" },
        { name: "Divakar Y N", phone: "8925084660" },
        { name: "Sanjay A", phone: "8220153508" }
    ];

    return (
        <section id="contact" className="py-20 relative bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-orbitron mb-4">
                        CONTACT <span className="text-neon-blue">US</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
                    <p className="mt-4 text-gray-400">Need help? Get in touch with our student coordinators.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coordinators.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl text-center group hover:border-neon-blue transition-all"
                        >
                            <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-blue/20 transition-colors">
                                <User className="text-neon-blue" size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-orbitron text-white mb-2">{person.name}</h3>
                            <div className="flex items-center justify-center gap-2 text-gray-300 group-hover:text-neon-blue transition-colors">
                                <Phone size={16} />
                                <a href={`tel:${person.phone}`} className="font-inter">{person.phone}</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
