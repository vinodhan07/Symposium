import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, CreditCard, AlertCircle } from 'lucide-react';

const Registration = () => {
    return (
        <section id="register" className="py-20 bg-bg-dark relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Payment Details */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-orbitron mb-6">
                            REGISTER <span className="text-neon-green">NOW</span>
                        </h2>
                        <p className="text-gray-300 mb-8 font-inter">
                            Secure your spot at ARIVOLI'26. Follow the steps to complete your registration.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
                                <CreditCard className="text-neon-green shrink-0" size={32} />
                                <div>
                                    <h4 className="text-xl font-bold font-orbitron text-white">Registration Fee</h4>
                                    <p className="text-3xl font-bold text-neon-green mt-2">₹250 <span className="text-sm text-gray-400 font-normal">(Inc. GST)</span></p>
                                    <p className="text-gray-400 text-sm mt-1">Per Participant | Access to all events</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 text-center border-neon-green/30">
                                <h4 className="text-lg font-bold font-orbitron text-white mb-4">Scan to Pay via UPI</h4>
                                <div className="bg-white p-2 rounded-lg inline-block mb-4">
                                    <QrCode className="w-48 h-48 text-black" />
                                </div>
                                <p className="text-sm text-gray-400">Merchant Name: Knowledge Institute</p>
                                <p className="text-xs text-gray-500 mt-1">UPI ID: kiot@upi</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Steps & Action */}
                    <div className="glass-card p-8 neon-border relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 rounded-full blur-[60px] -mr-10 -mt-10"></div>

                        <h3 className="text-2xl font-bold font-orbitron mb-8 text-white">Registration Process</h3>

                        <div className="space-y-8 mb-10">
                            {[
                                { step: "01", title: "Make Payment", desc: "Scan the QR code and pay the registration fee of ₹250." },
                                { step: "02", title: "Save Screenshot", desc: "Take a clear screenshot of the payment success screen with Transaction ID." },
                                { step: "03", title: "Fill The Form", desc: "Click the button below to fill your details and upload the payment proof." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-orbitron font-bold text-neon-blue">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white font-orbitron">{item.title}</h4>
                                        <p className="text-gray-400 text-sm mt-1 font-inter">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg flex items-start gap-3 mb-8">
                            <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-sm font-bold text-red-500 font-orbitron">Important!</h4>
                                <p className="text-gray-400 text-xs mt-1">No On-Spot Registration. Payment screenshot is mandatory.</p>
                            </div>
                        </div>

                        <a
                            href="https://docs.google.com/forms/d/1uVXQ8OrqTb2NiLTs8TKddSBBWQ3hhzsbGh1hUJIRwPQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 text-center bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold font-orbitron rounded-xl hover:shadow-[0_0_30px_rgba(188,19,254,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            CLICK HERE TO FILL FORM
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
