import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';
import { Sparkles } from 'lucide-react';

export function Navbar() {
    const location = useLocation();

    return (
        <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 w-full">
            <nav className="glass-pill rounded-full px-4 py-2 flex items-center gap-6 sm:gap-10 transition-all duration-300">
                <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg text-accent-trust cursor-pointer">
                    <Sparkles className="w-5 h-5 text-accent-action" />
                    <span>HelloFlint</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary/70">
                    <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>
                        How it Works
                    </Link>
                    <Link to="/pricing" className={`hover:text-primary transition-colors ${location.pathname === '/pricing' ? 'text-primary' : ''}`}>
                        Pricing
                    </Link>
                    <Link to="/blog" className={`hover:text-primary transition-colors ${location.pathname.startsWith('/blog') ? 'text-primary' : ''}`}>
                        Blog
                    </Link>
                </div>

                <a href="https://cal.com/chris-ilabaca-i6domm" target="_blank" rel="noopener noreferrer">
                    <MagneticButton variant="primary" className="py-2.5 px-5 text-sm">
                        Book a Free Call
                    </MagneticButton>
                </a>
            </nav>
        </header>
    );
}
