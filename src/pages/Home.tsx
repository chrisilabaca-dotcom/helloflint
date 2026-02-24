import { Hero } from '../components/sections/Hero';
import { ValueProps } from '../components/sections/ValueProps';
import { Process } from '../components/sections/Process';
import { SEO } from '../components/seo/SEO';

export function Home() {
    return (
        <>
            <SEO />
            <div className="pt-24">
                <Hero />
                <ValueProps />
                <Process />
            </div>
        </>
    );
}
