import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { MessageSquare, Calendar } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-text',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
        0.2
      )
        .fromTo('.hero-actions',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo('.hero-visual-card',
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' },
          "-=0.8"
        )
        .fromTo('.hero-character',
          { x: 30, opacity: 0, rotation: 10 },
          { x: 0, opacity: 1, rotation: 0, duration: 1, ease: 'back.out(1.5)' },
          "-=0.6"
        );

      gsap.to('.hero-float', {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      gsap.to('.hero-character-float', {
        y: -10,
        rotation: -2,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.5
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-background" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-trust/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-action/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-trust/10 text-accent-trust text-xs font-mono font-medium mb-6 hero-text shadow-sm border border-accent-trust/10">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            System Operational
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-primary leading-[1.1] tracking-tight mb-6 hero-text">
            Say hello to your new assistant.
          </h1>

          <p className="text-lg md:text-xl text-primary/70 font-sans leading-relaxed mb-10 hero-text max-w-xl">
            We build custom AI assistants for small businesses. Reclaim your time, handle enquiries instantly, and let technology do the heavy lifting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-actions">
            <a href="https://cal.com/chris-ilabaca-i6domm" target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="primary" className="py-4 px-8 text-base shadow-lg shadow-accent-action/20">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Call
              </MagneticButton>
            </a>
            <a href="#contact">
              <MagneticButton variant="outline" className="py-4 px-8 text-base">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send a Message
              </MagneticButton>
            </a>
          </div>
        </div>

        <div className="relative h-[500px] w-full flex items-center justify-center hero-visual-card">
          <div className="relative w-[340px] h-[480px] bg-white rounded-card shadow-2xl shadow-primary/5 border border-primary/5 p-6 flex flex-col justify-between hero-float">

            <div className="flex items-center gap-4 pb-4 border-b border-background-alt">
              <div className="w-10 h-10 rounded-full bg-accent-trust/10 flex items-center justify-center">
                <SparklesIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-primary text-sm">HelloFlint Agent</div>
                <div className="text-xs text-accent-success font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-success"></span> Online
                </div>
              </div>
            </div>

            <div className="flex-1 py-6 flex flex-col gap-4">
              <div className="self-end bg-background-alt max-w-[85%] p-3 rounded-2xl rounded-tr-sm text-sm text-primary/80">
                Can you send the quote to Sarah and book her in for next Tuesday?
              </div>
              <div className="self-start bg-accent-trust text-white max-w-[85%] p-3 rounded-2xl rounded-tl-sm text-sm">
                Done. Quote sent and calendar updated for Tuesday at 10 AM.
              </div>
              <div className="self-end bg-background-alt max-w-[85%] p-3 rounded-2xl rounded-tr-sm text-sm text-primary/80">
                Perfect, thanks!
              </div>
            </div>

            <div className="h-12 bg-background-alt rounded-full w-full flex items-center px-4 justify-between mt-auto">
              <div className="w-1/2 h-2 bg-primary/10 rounded-full"></div>
              <div className="w-6 h-6 rounded-full bg-accent-action/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-accent-action rounded-full shrink-0"></div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/5 rounded-full"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-primary/5 rounded-full border-dashed"></div>

          </div>

        </div>

      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-trust">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
