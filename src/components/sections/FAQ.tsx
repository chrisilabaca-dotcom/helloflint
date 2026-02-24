import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const faqs = [
    {
        q: "Do I need any technical knowledge?",
        a: "Not at all. We handle everything — the setup, the configuration, the deployment. All you need to do is tell us about your business and how you work. If you can use a messaging app, you can use your assistant."
    },
    {
        q: "What AI technology does it use?",
        a: "Your assistant is built on Claude by Anthropic — the same AI technology used by companies like Notion, DuckDuckGo, and Lonely Planet. It is one of the most capable and reliable AI models available, and it is specifically good at understanding context, following instructions, and having natural conversations."
    },
    {
        q: "What does my assistant actually do?",
        a: "That depends on your business. Common setups include handling customer enquiries, drafting replies to emails, answering frequently asked questions, helping with scheduling, generating quotes, organising information, and walking through processes. During the discovery call we will work out what makes the most sense for you."
    },
    {
        q: "How much does it cost to run after setup?",
        a: "Your assistant runs on pay as you go costs that you control directly. Most clients spend between £35 and £90 per month. This covers the AI model usage and a small hosting fee. There are no hidden charges and we walk you through everything during your training session."
    },
    {
        q: "Do I own my assistant?",
        a: "Yes, completely. You own the configuration, the data, and the API key. If you ever want to stop using HelloFlint, you keep everything. There is no lock in."
    },
    {
        q: "Can I cancel anytime?",
        a: "Yes. There is no contract or ongoing commitment after your setup is complete. If you choose to add a monthly support retainer, you can cancel that at any time too."
    },
    {
        q: "Is my business data safe?",
        a: "Your data stays within your own infrastructure. We do not store your business information on our systems after the build is complete. Your assistant runs on your own API key and your own server. You are in full control."
    }
];

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-background">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading text-primary mb-6">Got Questions?</h2>
                    <p className="text-lg text-primary/60 font-sans">
                        Everything you need to know about setting up your AI assistant.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} question={faq.q} answer={faq.a} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
        setIsOpen(!isOpen);

        if (!isOpen && contentRef.current) {
            gsap.fromTo(contentRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" }
            );
        } else if (isOpen && contentRef.current) {
            gsap.to(contentRef.current, {
                height: 0, opacity: 0, duration: 0.3, ease: "power2.in"
            });
        }
    };

    return (
        <div className="border border-primary/5 rounded-2xl bg-white overflow-hidden transition-all hover:border-primary/10">
            <button
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                onClick={toggle}
            >
                <span className="font-heading text-lg text-primary">{question}</span>
                <ChevronDown className={cn("w-5 h-5 text-primary/40 transition-transform duration-300 shrink-0", isOpen ? "rotate-180 text-accent-action" : "")} />
            </button>
            <div
                ref={contentRef}
                style={{ height: 0, opacity: 0 }}
                className="px-6 overflow-hidden"
            >
                <p className="pb-6 text-primary/70 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}
