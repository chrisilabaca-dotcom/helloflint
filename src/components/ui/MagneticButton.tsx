import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

export function MagneticButton({ children, className, variant = 'primary', ...props }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const xTo = gsap.quickTo(button, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        const yTo = gsap.quickTo(button, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

        // Slight separate movement for text to create parallax
        const textXTo = textRef.current ? gsap.quickTo(textRef.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' }) : null;
        const textYTo = textRef.current ? gsap.quickTo(textRef.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' }) : null;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.2); // 20% pull
            yTo(y * 0.2);

            if (textXTo && textYTo) {
                textXTo(x * 0.1);
                textYTo(y * 0.1);
            }
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            if (textXTo && textYTo) {
                textXTo(0);
                textYTo(0);
            }
            // Reset scale on leave
            gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' });
        };

        const handleMouseEnter = () => {
            // Magnetic bloom pop
            gsap.to(button, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);
        button.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
            button.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    const variants = {
        primary: 'bg-accent-action text-white hover:shadow-lg shadow-accent-action/20',
        secondary: 'bg-accent-trust text-white hover:shadow-lg shadow-accent-trust/20',
        outline: 'bg-white text-primary border border-primary/10 hover:border-primary/20 hover:shadow-sm'
    };

    return (
        <button
            ref={buttonRef}
            className={cn(
                'relative inline-flex items-center justify-center px-6 py-3 rounded-btn font-medium transition-colors cursor-pointer',
                variants[variant],
                className
            )}
            {...props}
        >
            <div ref={textRef} className="relative z-10 flex items-center justify-center pointer-events-none">
                {children}
            </div>
        </button>
    );
}
