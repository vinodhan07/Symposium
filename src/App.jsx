import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-fold components for better performance
const Events = lazy(() => import('./components/Events'));
const Schedule = lazy(() => import('./components/Schedule'));
const Registration = lazy(() => import('./components/Registration'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading placeholder
const LoadingPlaceholder = () => (
    <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <div className="min-h-screen text-white overflow-hidden overflow-x-hidden relative selection:bg-neon-blue selection:text-black">
            {/* Global Background Elements */}
            <div className="bg pointer-events-none opacity-60"></div>
            <div className="star-field pointer-events-none">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Suspense fallback={<LoadingPlaceholder />}>
                    <Events />
                    <Schedule />
                    <Registration />
                    <About />
                    <Contact />
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}

export default App;

