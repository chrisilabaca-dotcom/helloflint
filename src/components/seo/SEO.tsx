import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
    url?: string;
}

export function SEO({
    title = 'HelloFlint | Your Own AI Assistant',
    description = 'Automate lead qualification, schedule meetings, and win back your time with a personalised, always-on AI assistant.',
    type = 'website',
    url = 'https://helloflint.agency',
    image = 'https://helloflint.agency/og-image.jpg'
}: SEOProps) {

    // Clean dynamic title suffix
    const formattedTitle = title === 'HelloFlint | Your Own AI Assistant' ? title : `${title} | HelloFlint`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{formattedTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={formattedTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
