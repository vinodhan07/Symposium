import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for sci-fi effect
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-bg-dark flex-col">
                <div className="w-24 h-24 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
                <h2 className="mt-4 text-2xl font-orbitron text-neon-blue animate-pulse">
                    INITIALIZING SYSTEM...
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-dark text-white overflow-hidden relative">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                {/* Floating particles or gradient orbs could go here */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Events />
                
                {/* Event Poster Section */}
                <section className="py-20 bg-black flex justify-center items-center p-4">
                    <img 
                        src="/event-poster.jpg" 
                        alt="Arivoli '26 Event Poster" 
                        className="max-w-full h-auto rounded-xl shadow-[0_0_30px_rgba(0,243,255,0.3)] border border-white/10"
                    />
                </section>

                <Contact />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default App;
