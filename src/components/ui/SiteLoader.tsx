import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SiteLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Let the video play and the loading animation run for 4 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background subtle glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-trust/10 blur-[80px] rounded-full pointer-events-none" />

                    {/* Character Video Wrapper */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-white shadow-2xl ring-4 ring-primary/5 flex items-center justify-center mb-8 shrink-0"
                    >
                        <video
                            src="/videos/HelloFlintvide1.MP4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[120%] h-[120%] max-w-none object-cover mix-blend-multiply"
                        />
                        {/* Spinning overlay ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-accent-action/30 rounded-full"
                        />
                    </motion.div>

                    {/* Fun Loading Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="font-heading text-xl text-primary font-bold tracking-tight">Waking up Flint</div>
                        <div className="flex gap-1.5">
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                className="w-2 h-2 bg-accent-action rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                className="w-2 h-2 bg-accent-trust rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                className="w-2 h-2 bg-accent-success rounded-full"
                            />
                        </div>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
