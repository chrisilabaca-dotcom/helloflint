import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react';

const FlintFace = ({ isLarge = false }: { isLarge?: boolean }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Blinking Eyes */}
            <div className={`absolute ${isLarge ? 'top-[22%] gap-2.5' : 'top-[25%] gap-2'} left-0 w-full flex justify-center`}>
                <motion.div
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1], repeatDelay: 1 }}
                    className={`${isLarge ? 'w-2 h-3.5' : 'w-1.5 h-2.5'} bg-white rounded-full origin-center`}
                />
                <motion.div
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1], repeatDelay: 1 }}
                    className={`${isLarge ? 'w-2 h-3.5' : 'w-1.5 h-2.5'} bg-white rounded-full origin-center`}
                />
            </div>
            {/* Smile */}
            <svg className={`absolute ${isLarge ? 'bottom-[22%] w-6 h-3' : 'bottom-[18%] w-4 h-2'} text-white/90`} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C4 6 12 6 14 2" stroke="currentColor" strokeWidth={isLarge ? "3" : "2.5"} strokeLinecap="round" />
            </svg>
        </div>
    );
};

type ChatState = {
    step: number;
    isOpen: boolean;
    data: {
        name: string;
        business: string;
        pain_point: string;
        pain_detail: string;
        ai_experience: string;
        success_metric: string;
        email: string;
    };
};

const WEBHOOK_URL = 'https://helloflint-webhook.chris-ilabaca.workers.dev/discovery';
const CAL_URL = 'https://cal.com/chris-ilabaca-i6domm';

// Chat message helper
const BotMsg = ({ text, delay = 0 }: { text: string | React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        className="bg-background-alt text-primary/90 p-3.5 rounded-2xl rounded-bl-sm max-w-[85%] text-sm"
    >
        {text}
    </motion.div>
);

const UserMsg = ({ text }: { text: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95, originX: 1, originY: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-accent-trust text-white p-3.5 rounded-2xl rounded-br-sm max-w-[85%] text-sm self-end"
    >
        {text}
    </motion.div>
);

export function FlintChat() {
    const [state, setState] = useState<ChatState>({
        step: 0, // 0 is initial un-opened. 1 is greeting.
        isOpen: false,
        data: { name: '', business: '', pain_point: '', pain_detail: '', ai_experience: '', success_metric: '', email: '' }
    });

    const [inputVal, setInputVal] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [state.step, state.isOpen]);

    const toggleOpen = () => {
        setState(s => ({ ...s, isOpen: !s.isOpen, step: s.step === 0 ? 1 : s.step }));
    };

    const updateData = (key: keyof ChatState['data'], value: string) => {
        setState(s => ({ ...s, data: { ...s.data, [key]: value } }));
    };

    const nextStep = () => {
        setState(s => ({ ...s, step: s.step + 1 }));
        setInputVal('');
    };

    const handleSubmitFinal = async (email: string) => {
        setIsSubmitting(true);
        updateData('email', email);

        const payload = {
            source: "discovery_chat",
            timestamp: new Date().toISOString(),
            ...state.data,
            email
        };

        try {
            // Intentionally firing and forgetting for frontend speed, assume success
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            setTimeout(() => {
                setIsSubmitting(false);
                nextStep(); // Move to step 9 (Complete)
            }, 800);
        } catch (e) {
            setIsSubmitting(false);
            nextStep();
        }
    };



    return (
        <>
            {/* Floating Toggle Button */}
            <AnimatePresence>
                {!state.isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, -6, 0]
                        }}
                        transition={{
                            scale: { duration: 0.3 },
                            opacity: { duration: 0.3 },
                            y: {
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={toggleOpen}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-[22px] bg-gradient-to-br from-accent-action to-[#E06D45] flex items-center justify-center shadow-2xl hover:scale-105 hover:shadow-accent-action/20 hover:shadow-2xl transition-all duration-300 text-white border-2 border-white/20 group"
                    >
                        <FlintFace isLarge={true} />

                        {/* Peeking chat bubble badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2, type: 'spring' }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md text-accent-action"
                        >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Main Chat Window */}
            <AnimatePresence>
                {state.isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-3rem)] sm:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-primary/5 flex flex-col overflow-hidden"
                    >

                        {/* Header */}
                        <div className="bg-primary text-white p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    initial={{ y: 30, rotate: -20, scale: 0.5, opacity: 0 }}
                                    animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                                    className="w-10 h-10 rounded-[14px] bg-white shadow-inner relative overflow-hidden ring-2 ring-white/20 shrink-0"
                                >
                                    <video
                                        src="/videos/HelloFlintvide1.MP4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-[120%] h-[120%] max-w-none -ml-[10%] -mt-[10%] object-cover mix-blend-multiply"
                                    />
                                    {/* Ambient subtle pulse over the character */}
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse mix-blend-overlay pointer-events-none"></div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="font-heading font-bold text-base tracking-wide">Flint</div>
                                    <div className="flex items-center gap-1.5 text-xs text-white/60">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-[pulse_2s_ease-in-out_Infinity]"></span>
                                        Ready to help
                                    </div>
                                </motion.div>
                            </div>
                            <button onClick={toggleOpen} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5 text-white/70" />
                            </button>
                        </div>

                        {/* Chat History Area */}
                        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-[#FDFDFD]">

                            {/* Step 1: Greeting */}
                            {state.step >= 1 && (
                                <>
                                    <BotMsg text={<>Hey there 👋 <br /><br />I'm Flint, Chris's AI assistant. I help figure out if an AI assistant could save you time in your business.<br /><br />Mind if I ask you a few quick questions?</>} />
                                    {state.step === 1 ? (
                                        <div className="flex gap-2 mt-2">
                                            <button onClick={nextStep} className="flex-1 py-2.5 bg-accent-action text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity">Let's do it</button>
                                            <button onClick={nextStep} className="flex-1 py-2.5 bg-primary/5 text-primary text-sm font-medium rounded-xl hover:bg-primary/10 transition-opacity">Sure, go ahead</button>
                                        </div>
                                    ) : (
                                        <UserMsg text="Let's do it" />
                                    )}
                                </>
                            )}

                            {/* Step 2: Name */}
                            {state.step >= 2 && (
                                <>
                                    <BotMsg delay={0.2} text="Great! First off, what's your name?" />
                                    {state.step > 2 && <UserMsg text={state.data.name} />}
                                </>
                            )}

                            {/* Step 3: Business */}
                            {state.step >= 3 && (
                                <>
                                    <BotMsg delay={0.2} text={`Nice to meet you, ${state.data.name}! What kind of business do you run?`} />
                                    {state.step > 3 && <UserMsg text={state.data.business} />}
                                </>
                            )}

                            {/* Step 4: Pain Point Selection */}
                            {state.step >= 4 && (
                                <>
                                    <BotMsg delay={0.2} text={<>Got it.<br />So what's eating up most of your time right now? The stuff that makes you think 'I wish I didn't have to do this myself'...</>} />
                                    {state.step === 4 ? (
                                        <div className="flex flex-col gap-2 mt-2 pl-2 border-l-2 border-primary/10 ml-2">
                                            {['Answering the same questions', 'Qualifying leads', 'Admin and scheduling', 'Something else'].map(opt => (
                                                <button key={opt} onClick={() => { updateData('pain_point', opt); nextStep(); }} className="text-left px-4 py-2.5 bg-white border border-primary/10 text-primary text-sm font-medium rounded-xl hover:border-accent-action/30 transition-colors">
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <UserMsg text={state.data.pain_point} />
                                    )}
                                </>
                            )}

                            {/* Step 5: Pain Detail */}
                            {state.step >= 5 && (
                                <>
                                    <BotMsg delay={0.2} text={state.data.pain_point === 'Something else' ? "Tell me more about what's taking up your time:" : "Can you give me a quick example of what that looks like day to day?"} />
                                    {state.step > 5 && <UserMsg text={state.data.pain_detail} />}
                                </>
                            )}

                            {/* Step 6: AI Experience */}
                            {state.step >= 6 && (
                                <>
                                    <BotMsg delay={0.2} text={<>That's exactly the kind of thing an assistant can handle.<br /><br />Quick one - have you used any AI tools before? ChatGPT, that sort of thing?</>} />
                                    {state.step === 6 ? (
                                        <div className="flex flex-col gap-2 mt-2 pl-2 border-l-2 border-primary/10 ml-2">
                                            {['Yes, I use AI regularly', 'A bit, nothing serious', 'Not really'].map(opt => (
                                                <button key={opt} onClick={() => { updateData('ai_experience', opt); nextStep(); }} className="text-left px-4 py-2.5 bg-white border border-primary/10 text-primary text-sm font-medium rounded-xl hover:border-accent-action/30 transition-colors">
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <UserMsg text={state.data.ai_experience} />
                                    )}
                                </>
                            )}

                            {/* Step 7: Success Metric */}
                            {state.step >= 7 && (
                                <>
                                    <BotMsg delay={0.2} text={<>Perfect.<br />Last question - if we built something for you, what would 'winning' look like? What do you want to get back?</>} />
                                    {state.step === 7 ? (
                                        <div className="flex flex-col gap-2 mt-2 pl-2 border-l-2 border-primary/10 ml-2">
                                            {['More time', 'Fewer interruptions', 'Faster customer responses', 'All of the above'].map(opt => (
                                                <button key={opt} onClick={() => { updateData('success_metric', opt); nextStep(); }} className="text-left px-4 py-2.5 bg-white border border-primary/10 text-primary text-sm font-medium rounded-xl hover:border-accent-action/30 transition-colors">
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <UserMsg text={state.data.success_metric} />
                                    )}
                                </>
                            )}

                            {/* Step 8: Email Capture */}
                            {state.step >= 8 && (
                                <>
                                    <BotMsg delay={0.2} text={<>{state.data.name}, this sounds like a great fit.<br /><br />Drop your email and I'll have Chris send over some ideas tailored to your business.</>} />
                                    {state.step > 8 && <UserMsg text={state.data.email} />}
                                </>
                            )}

                            {/* Step 9: Complete */}
                            {state.step >= 9 && (
                                <>
                                    <BotMsg delay={0.2} text={<>Brilliant ✨<br /><br />Chris will be in touch within 24 hours. If you want to skip the back and forth and just book a call now, here's the link:</>} />
                                    <div className="flex flex-col gap-2 mt-2">
                                        <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 bg-accent-trust text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity">
                                            Book a Free Call
                                            <ChevronRight className="w-4 h-4" />
                                        </a>
                                        <button onClick={() => setState({ step: 1, isOpen: true, data: { name: '', business: '', pain_point: '', pain_detail: '', ai_experience: '', success_metric: '', email: '' } })} className="py-2 text-primary/50 text-xs font-medium hover:text-primary transition-colors">
                                            Start over
                                        </button>
                                    </div>
                                </>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area (Only show on Free/Email input steps) */}
                        {(state.step === 2 || state.step === 3 || state.step === 5 || state.step === 8) && (
                            <div className="p-4 bg-white border-t border-primary/5 shrink-0">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (!inputVal.trim()) return;

                                        if (state.step === 2) updateData('name', inputVal);
                                        if (state.step === 3) updateData('business', inputVal);
                                        if (state.step === 5) updateData('pain_detail', inputVal);

                                        if (state.step === 8) {
                                            handleSubmitFinal(inputVal);
                                            return;
                                        }

                                        nextStep();
                                    }}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type={state.step === 8 ? "email" : "text"}
                                        value={inputVal}
                                        onChange={e => setInputVal(e.target.value)}
                                        placeholder={
                                            state.step === 2 ? "Type your name..." :
                                                state.step === 3 ? "e.g. Fitness studio, agency..." :
                                                    state.step === 8 ? "name@company.com" : "Type your answer..."
                                        }
                                        className="flex-1 bg-background-alt px-4 py-3 rounded-xl outline-none border border-transparent focus:border-primary/10 focus:bg-white transition-all text-sm shadow-inner"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputVal.trim() || isSubmitting}
                                        className="w-11 h-11 shrink-0 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 transition-all font-medium"
                                    >
                                        {isSubmitting ? <span className="w-4 h-4 rounded-full border-2 border-t-white/30 border-white animate-spin"></span> : <Send className="w-4 h-4 ml-0.5" />}
                                    </button>
                                </form>
                            </div>
                        )}

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
