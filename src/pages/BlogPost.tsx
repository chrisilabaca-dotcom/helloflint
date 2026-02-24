import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                type="article"
                url={`https://helloflint.agency/blog/${post.slug}`}
            />
            <article className="pt-32 pb-24 min-h-screen bg-background">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">

                    <Link to="/blog" className="inline-flex items-center text-sm font-medium text-primary/60 hover:text-accent-action transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Journal
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-accent-trust text-sm font-mono font-medium px-3 py-1 rounded-full bg-accent-trust/10">
                                {post.category}
                            </span>
                            <span className="text-primary/40 text-sm font-mono">{post.date} • {post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight tracking-tight mb-6">
                            {post.title}
                        </h1>
                        <p className="text-xl text-primary/60 leading-relaxed font-medium">
                            {post.excerpt}
                        </p>
                    </header>

                    <div className="w-full h-px bg-primary/10 mb-12" />

                    <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-primary/80 prose-a:text-accent-action max-w-none prose-p:leading-relaxed whitespace-pre-line text-lg font-sans">
                        {post.content}
                    </div>

                </div>
            </article>
        </>
    );
}
