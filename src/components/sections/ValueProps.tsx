import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Clock, Sparkles } from 'lucide-react';

export function ValueProps() {
    return (
        <section className="py-24 bg-background border-t border-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">What We Do.</h2>
                    <div className="space-y-4 text-primary/70 text-lg leading-relaxed">
                        <p>
                            Running a small business means wearing every hat. Customer enquiries, scheduling, quoting, chasing invoices, answering the same questions over and over — it never stops.
                        </p>
                        <p>
                            What if you had a smart assistant that could handle the repetitive stuff? One that actually knows your business — your services, your prices, your way of working — and is available 24/7 through a messaging app you already use?
                        </p>
                        <p className="font-medium text-accent-trust pt-2">That is what we build.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card1 />
                    <Card2 />
                    <Card3 />
                </div>

            </div>
        </section>
    );
}

// Card 1: The Problem
function Card1() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="bg-background-alt p-8 rounded-card border border-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 cursor-default flex flex-col justify-between min-h-[320px] group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="h-24 w-full flex items-end mb-6 relative overflow-hidden">
                {/* Abstract papers stack that clears on hover */}
                <div className={cn("absolute w-16 h-20 bg-white border border-primary/10 rounded-md bottom-0 left-0 transition-all duration-500 origin-bottom-left", hovered ? "rotate-[-45deg] -translate-x-full opacity-0" : "rotate-[-5deg] z-10")}></div>
                <div className={cn("absolute w-16 h-20 bg-white border border-primary/10 rounded-md bottom-2 left-2 transition-all duration-500 origin-bottom delay-75", hovered ? "rotate-[45deg] translate-y-full opacity-0" : "rotate-[2deg] z-20")}></div>
                <div className={cn("absolute w-16 h-20 bg-white border border-primary/10 rounded-md bottom-4 left-4 transition-all duration-500 origin-bottom-right delay-150 shadow-sm", hovered ? "translate-x-full opacity-0" : "rotate-[8deg] z-30")}></div>

                {/* Success state visible behind stack */}
                <div className={cn("absolute inset-0 flex items-center justify-center transition-all duration-700 delay-200", hovered ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
                    <div className="w-12 h-12 rounded-full bg-accent-success/10 flex items-center justify-center text-accent-success">
                        <Sparkles className="w-6 h-6" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-heading mb-3">Buried in Admin</h3>
                <p className="text-sm text-primary/70 leading-relaxed group-hover:text-primary transition-colors">
                    We take the time to understand how your business works, then we build and configure a personalised AI assistant that fits into your day.
                </p>
            </div>
        </div>
    );
}

// Card 2: 24/7 Availability
function Card2() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const d = new Date();
            setTime(d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const int = setInterval(updateTime, 1000);
        return () => clearInterval(int);
    }, []);

    return (
        <div className="bg-background-alt p-8 rounded-card border border-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 cursor-default flex flex-col justify-between min-h-[320px] group">
            <div className="h-24 w-full flex items-center mb-6">
                <div className="px-4 py-2 bg-white rounded-full border border-primary/5 shadow-sm flex items-center gap-3 w-full group-hover:border-accent-action/20 transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-action animate-pulse shrink-0"></div>
                    <div className="font-mono text-sm font-medium tracking-tight whitespace-nowrap overflow-hidden text-primary/90">
                        {time}
                    </div>
                    <div className="ml-auto">
                        <Clock className="w-4 h-4 text-primary/30 group-hover:text-accent-action transition-colors" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-heading mb-3">24/7 Availability</h3>
                <p className="text-sm text-primary/70 leading-relaxed group-hover:text-primary transition-colors">
                    It runs through Telegram, WhatsApp, or a web chat — whichever suits you best. Alway on, never sleeps. Fixed price, no hidden costs.
                </p>
            </div>
        </div>
    );
}

// Card 3: The Tech
function Card3() {
    const [active, setActive] = useState(false);

    return (
        <div
            className={cn("bg-background-alt p-8 rounded-card border border-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 cursor-default flex flex-col justify-between min-h-[320px] group", active ? "bg-accent-trust/5 border-accent-trust/20" : "")}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="h-24 w-full flex items-center mb-6">
                <div className="w-full flex justify-center">
                    <div className={cn("w-16 h-8 rounded-full p-1 transition-colors duration-300 relative", active ? "bg-accent-success" : "bg-primary/20")}>
                        <div className={cn("w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300", active ? "translate-x-8" : "translate-x-0")}></div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-heading mb-3">No Tech Skills Needed</h3>
                <p className="text-sm text-primary/70 leading-relaxed group-hover:text-primary transition-colors">
                    You do not need any technical knowledge. We handle everything. You own the assistant entirely.
                </p>
            </div>
        </div>
    );
}
