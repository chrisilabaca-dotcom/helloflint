import { Link } from 'react-router-dom';
import { Mail, Calendar } from 'lucide-react';

export function Footer() {
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

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-primary/80">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-primary/80">Business Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all" placeholder="Acme Ltd" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary/80">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary/80">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-background-alt border-none focus:ring-2 focus:ring-accent-action/20 outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 rounded-btn bg-accent-trust text-white font-medium hover:bg-accent-trust/90 transition-colors mt-2">
                                Send Message
                            </button>
                        </form>
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
