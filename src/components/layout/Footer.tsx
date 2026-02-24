import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Calendar, CheckCircle2 } from 'lucide-react';

export function Footer() {
    const [formData, setFormData] = useState({ name: '', business: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setStatus('submitting');
        const payload = {
            source: "contact_form",
            timestamp: new Date().toISOString(),
            ...formData
        };

        try {
            await fetch('https://helloflint-webhook.chris-ilabaca.workers.dev/discovery', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            setStatus('success');
            setFormData({ name: '', business: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('idle');
        }
    };

    return (
        <footer id="contact" className="bg-background-alt relative overflow-hidden border-t border-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Open Door / Booking */}
                    <div className="max-w-md">
                        <h2 className="text-4xl font-heading text-primary mb-6">Let's map out your automation.</h2>
                        <p className="text-primary/70 mb-8 leading-relaxed">
                            Every great system starts with a conversation. Book a zero-pressure discovery call to walk through how an assistant could fit into your specific business.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            <a href="https://cal.com/chris-ilabaca-i6domm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary/80 hover:text-accent-action transition-colors group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <Calendar className="w-5 h-5 text-accent-trust" />
                                </div>
                                <div>
                                    <div className="font-heading font-bold">Book a Call</div>
                                    <div className="text-sm font-mono opacity-70">Find a time on Calendly</div>
                                </div>
                            </a>
                            <a href="mailto:hello@helloflint.co.uk" className="flex items-center gap-4 text-primary/80 hover:text-accent-action transition-colors group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5 text-accent-trust" />
                                </div>
                                <div>
                                    <div className="font-heading font-bold">Email Us</div>
                                    <div className="text-sm font-mono opacity-70">hello@helloflint.co.uk</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Quick Message Form */}
                    <div className="bg-white p-8 md:p-10 rounded-card shadow-xl shadow-primary/5 border border-primary/5">
                        <h3 className="text-2xl font-heading text-primary mb-6">Send a Quick Message</h3>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                <div className="w-16 h-16 bg-accent-success/10 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-accent-success" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-heading text-primary mb-2">Message Sent!</h4>
                                    <p className="text-primary/70 text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                                <button onClick={() => setStatus('idle')} className="text-sm font-medium text-accent-action mt-4 hover:opacity-80 transition-opacity">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-primary/80">Name</label>
                                        <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-primary/80">Business Name</label>
                                        <input name="business" value={formData.business} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all" placeholder="Acme Ltd" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-primary/80">Email</label>
                                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-primary/80">Message</label>
                                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
                                </div>

                                <button type="submit" disabled={status === 'submitting'} className="w-full py-4 rounded-btn bg-accent-trust text-white font-medium hover:bg-accent-trust/90 transition-colors mt-2 disabled:opacity-50 flex items-center justify-center gap-2">
                                    {status === 'submitting' ? (
                                        <>
                                            <span className="w-4 h-4 rounded-full border-2 border-t-white/30 border-white animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-24 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-mono text-primary/50">
                    <div>© {new Date().getFullYear()} HelloFlint. Built by <a href="https://brightloopmedia.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">Bright Loop Media</a>.</div>
                    <div className="flex gap-4">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
