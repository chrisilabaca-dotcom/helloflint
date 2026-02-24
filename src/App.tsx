import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FlintChat } from './components/ui/FlintChat';
import { SiteLoader } from './components/ui/SiteLoader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import { Home } from './pages/Home';
import { PricingPage } from './pages/PricingPage';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

// Scroll Restoration & GSAP cleanup bound to route changes
function RouteEffects() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Enforce scroll restoration AFTER exact DOM repaint and layout
        // A short timeout is significantly more reliable than requestAnimationFrame when mixing React Router + GSAP
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

            // Allow GSAP to see the new layout
            ScrollTrigger.refresh(true);
        }, 10);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <div className="relative w-full min-h-screen selection:bg-accent-action selection:text-white flex flex-col">
                <SiteLoader />
                <RouteEffects />
                <NoiseOverlay />
                <Navbar />

                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogIndex />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsOfService />} />
                    </Routes>
                </main>

                <Footer />

                {/* The Discovery Widget floats above everything globally */}
                <FlintChat />
            </div>
        </BrowserRouter>
    );
}

export default App;
