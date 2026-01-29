import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Registration = () => {
    return (
        <SectionWrapper id="register" className="relative">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[80px]"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl sm:text-5xl font-bold font-orbitron mb-4">
                    REGISTER <span className="text-neon-blue">NOW</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                    Secure your spot at ARIVOLI'26. Follow the simple steps below to complete your registration.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Payment Details */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-neon-blue/30 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue shrink-0 group-hover:scale-110 transition-transform">
                                <CreditCard size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-orbitron text-white mb-2">Registration Fee</h4>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-neon-blue">₹250</span>
                                    <span className="text-sm text-gray-400 font-inter">(Inc. GST)</span>
                                </div>
                                <p className="text-gray-400 text-sm mt-2 font-inter">Per Participant | Access to all technical & non-technical events</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 text-center border-neon-blue/30 relative">
                        <h4 className="text-lg font-bold font-orbitron text-white mb-6">Scan to Pay via UPI</h4>
                        <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                            <QrCode className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 text-black" />
                        </div>
                        <p className="text-sm text-gray-300 font-bold mb-1">Merchant Name: Knowledge Institute</p>
                        <p className="text-xs text-gray-500 font-inter">UPI ID: kiot@upi</p>
                    </div>
                </motion.div>

                {/* Steps & Form Link */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 lg:p-10 neon-border"
                >
                    <h3 className="text-2xl font-bold font-orbitron mb-8 text-white flex items-center gap-3">
                        <span className="w-2 h-8 bg-neon-purple rounded-full"></span>
                        Registration Process
                    </h3>

                    <div className="space-y-8 mb-10">
                        {[
                            { step: "01", title: "Make Payment", desc: "Scan the QR code and pay the registration fee." },
                            { step: "02", title: "Save Screenshot", desc: "Take a clear screenshot of the payment success screen with Transaction ID." },
                            { step: "03", title: "Fill The Form", desc: "Click the button below to upload details & proof." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-5 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bg-dark border border-neon-blue/30 flex items-center justify-center font-orbitron font-bold text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all duration-300">
                                    {item.step}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white font-orbitron group-hover:text-neon-blue transition-colors">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mt-1 font-inter">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg flex items-start gap-3 mb-8">
                        <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                        <div>
                            <h4 className="text-sm font-bold text-red-500 font-orbitron">Important!</h4>
                            <p className="text-gray-400 text-xs mt-1 font-inter">No On-Spot Registration. Payment screenshot is mandatory for verification.</p>
                        </div>
                    </div>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdA9IrRGBZuqQe8oioE-fbSp9CK9H4hYyGi_2HjGw0d2VenEA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 text-center bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold font-orbitron rounded-xl hover:shadow-[0_0_30px_rgba(188,19,254,0.6)] transition-all transform hover:-translate-y-1 relative overflow-hidden group"
                    >
                        <span className="relative z-10 uppercase tracking-widest">Click Here to Register</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Registration;
