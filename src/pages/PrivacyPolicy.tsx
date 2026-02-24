import { SEO } from '../components/seo/SEO';

export function PrivacyPolicy() {
    return (
        <>
            <SEO title="Privacy Policy" description="How HelloFlint handles data and AI processing privacy." url="https://helloflint.agency/privacy" />
            <div className="pt-32 pb-24 min-h-screen bg-background">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-heading text-primary leading-tight tracking-tight mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-primary/60">
                            Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </p>
                    </header>

                    <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-primary/80 prose-a:text-accent-action max-w-none">
                        <h2>1. Introduction</h2>
                        <p>
                            At HelloFlint ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data.
                            This privacy policy explains how we collect, use, and ensure the safety of your information when you visit our website
                            and use our AI automation services.
                        </p>

                        <h2>2. Data We Collect</h2>
                        <p>We may collect and process the following data:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> Name, business name, and job title.</li>
                            <li><strong>Contact Data:</strong> Email address and phone number.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and general usage analytics.</li>
                            <li><strong>Conversation Data:</strong> Information provided through our Discovery Chatbot or consultation calls to qualify AI suitability.</li>
                        </ul>

                        <h2>3. How We Use Your Data</h2>
                        <p>We use your data exclusively to:</p>
                        <ul>
                            <li>Provide you with relevant quotes and service proposals.</li>
                            <li>Communicate with you regarding our services.</li>
                            <li>Build, train, and deploy your custom AI assistants (data used here is isolated and not used to train global AI models).</li>
                            <li>Improve the functionality of our website.</li>
                        </ul>

                        <h2>4. AI Model Data Privacy</h2>
                        <p>
                            When building assistants on your behalf, we use third-party APIs (such as Anthropic Claude).
                            We strictly enforce "Zero Data Retention" policies through these APIs where available, ensuring that your specific business logic and customer conversations are <strong>never</strong> used by providers to train their public models.
                        </p>

                        <h2>5. Third-Party Links</h2>
                        <p>
                            Our website may include links to third-party services (e.g., Calendly for booking). We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>

                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>hello@helloflint.co.uk</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
