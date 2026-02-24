import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Code2, Rocket, LifeBuoy } from 'lucide-react';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "1",
        title: "Discovery",
        desc: "We start with a call to understand your business, your workflows, and where an assistant would make the biggest difference. No prep needed — just tell us how things work.",
        icon: MessageCircle,
        color: "bg-background-alt text-primary"
    },
    {
        num: "2",
        title: "Build",
        desc: "We design and configure your assistant from scratch. We build in your business knowledge, set up your workflows, and fine tune the responses until it sounds right and works right.",
        icon: Code2,
        color: "bg-accent-trust text-white"
    },
    {
        num: "3",
        title: "Deploy",
        desc: "We connect your assistant to your chosen messaging platform — Telegram, WhatsApp, or web chat — and make sure everything is running smoothly.",
        icon: Rocket,
        color: "bg-accent-action text-white"
    },
    {
        num: "4",
        title: "Support",
        desc: "You get a training session so you know exactly how to use it, plus documentation and a refinement period to dial in anything that needs adjusting once you are using it for real.",
        icon: LifeBuoy,
        color: "bg-accent-success text-white"
    }
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // The Sticky Stack implementation
            const cards = cardsRef.current;

            cards.forEach((card, index) => {
                if (!card) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 15%', // When card hits near top
                    endTrigger: containerRef.current,
                    end: 'bottom bottom', // Unpin when whole section ends
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    animation: index < cards.length - 1 ?
                        gsap.to(card, {
                            scale: 0.95,
                            opacity: 0.5,
                            filter: 'blur(4px)',
                            duration: 1,
                            ease: "none"
                        }) : undefined
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="how-it-works" className="bg-background py-24" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative h-full">

                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-heading text-primary mb-6">How It Works.</h2>
                    <p className="text-xl text-primary/60 font-sans max-w-xl mx-auto">
                        A simple, structured process. We remove the uncertainty to get you up and running quickly.
                    </p>
                </div>

                <div className="relative pb-48">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className={cn(
                                "w-full rounded-[3rem] p-8 md:p-16 border shadow-2xl flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-8 origin-top",
                                step.color,
                                step.color.includes('bg-background') ? 'border-primary/10 shadow-primary/5' : 'border-transparent shadow-black/10'
                            )}
                            style={{
                                zIndex: index + 1,
                                top: `${index * 20}px` // Native browser stacking behavior combined with GSAP pin
                            }}
                        >
                            {/* Icon Side */}
                            <div className="shrink-0">
                                <div className={cn(
                                    "w-32 h-32 rounded-full flex items-center justify-center border",
                                    step.color.includes('bg-background') ? 'bg-white border-primary/10' : 'bg-white/10 border-white/20 backdrop-blur-md'
                                )}>
                                    <step.icon className={cn("w-12 h-12", step.color.includes('bg-background') ? 'text-primary' : 'text-white')} />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="flex-1">
                                <div className={cn(
                                    "font-mono text-sm font-bold tracking-widest uppercase mb-4",
                                    step.color.includes('bg-background') ? 'text-accent-action' : 'text-white/60'
                                )}>
                                    Step {step.num}
                                </div>
                                <h3 className={cn(
                                    "text-3xl md:text-4xl font-heading mb-6",
                                    step.color.includes('bg-background') ? 'text-primary' : 'text-white'
                                )}>
                                    {step.title}
                                </h3>
                                <p className={cn(
                                    "text-lg leading-relaxed",
                                    step.color.includes('bg-background') ? 'text-primary/70' : 'text-white/80'
                                )}>
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
