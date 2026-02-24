import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { MagneticButton } from '../ui/MagneticButton';

const tiers = [
    {
        name: 'Starter',
        price: '£750',
        desc: 'Best for solopreneurs and small businesses who want a capable AI assistant for one core use case.',
        features: [
            'Discovery call',
            'One core workflow configured',
            'Custom master prompt built & tested',
            'Deployment to one messaging platform',
            'Training session & documentation',
            'One round of refinement within 14 days'
        ],
        delivery: '5 to 7 working days',
        highlight: false
    },
    {
        name: 'Professional',
        price: '£1,250',
        desc: 'Best for established businesses who want their assistant to handle multiple workflows and integrate with tools.',
        features: [
            'Extended discovery with workflow mapping',
            'Up to three workflows configured',
            'Advanced prompt with role specific context',
            'Deployment to one platform (second available)',
            'Full training & documentation',
            'Two rounds of refinement within 30 days'
        ],
        delivery: '8 to 10 working days',
        highlight: true
    },
    {
        name: 'Enterprise',
        price: '£2,000',
        desc: 'Best for businesses who want a fully embedded AI assistant across multiple channels with deep integration.',
        features: [
            'Full business and team workflow audit',
            'Up to five workflows configured',
            'Comprehensive prompt for complex operations',
            'Deployment to two messaging platforms',
            'Team training (up to 3 users) & playbook',
            'Three rounds of refinement within 60 days',
            'Priority email support during refinement'
        ],
        delivery: '10 to 14 working days',
        highlight: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background-alt border-t border-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading text-primary mb-6">Honest Pricing.</h2>
                    <p className="text-lg text-primary/70 font-sans">
                        Clear, upfront costs. No hidden fees. You own everything once we're done.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-16">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "rounded-card p-8 border transition-all duration-300 relative flex flex-col h-full",
                                tier.highlight
                                    ? "bg-white border-accent-action shadow-2xl shadow-accent-action/10 lg:-translate-y-4"
                                    : "bg-background border-primary/5 shadow-sm hover:shadow-md"
                            )}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-action text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-heading mb-2">{tier.name}</h3>
                                <div className="text-sm text-primary/60 mb-6 min-h-[60px]">{tier.desc}</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-bold text-primary/50 uppercase tracking-wide">From</span>
                                    <span className={cn("text-4xl font-heading", tier.highlight ? "text-accent-action" : "text-primary")}>{tier.price}</span>
                                </div>
                            </div>

                            <div className="flex-1">
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent-success shrink-0 mt-0.5" />
                                            <span className="text-sm text-primary/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-primary/5 mb-8">
                                <div className="text-sm font-mono text-primary/50 flex items-center justify-center gap-2">
                                    <span>Delivery:</span>
                                    <span className="text-primary/80 font-medium">{tier.delivery}</span>
                                </div>
                            </div>

                            <a href="https://cal.com/chris-ilabaca-i6domm" target="_blank" rel="noopener noreferrer" className="block w-full">
                                <MagneticButton
                                    variant={tier.highlight ? "primary" : "outline"}
                                    className="w-full"
                                >
                                    Book Discovery Call
                                </MagneticButton>
                            </a>
                        </div>
                    ))}
                </div>

                {/* CTA and Running Costs Box */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg font-medium text-primary mb-8">
                        Not sure which package is right? Book a free call and we will work it out together.
                    </p>

                    <div className="bg-white rounded-2xl p-6 border border-primary/5 shadow-sm text-sm text-primary/70 leading-relaxed">
                        <h4 className="font-heading text-primary text-base mb-2">Ongoing Running Costs</h4>
                        After setup, your assistant runs on pay as you go costs that you control directly. Most clients spend between <strong className="text-primary font-mono">£35 and £90 per month</strong> depending on usage. We will walk you through everything during your training session so there are no surprises.
                    </div>
                </div>

            </div>
        </section>
    );
}
