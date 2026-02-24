import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { SEO } from '../components/seo/SEO';

export function PricingPage() {
    return (
        <>
            <SEO title="Pricing & Plans" description="Transparent pricing for autonomous AI assistants." url="https://helloflint.agency/pricing" />
            <div className="pt-24">
                <Pricing />
                <FAQ />
            </div>
        </>
    );
}
