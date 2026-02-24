import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { SEO } from '../components/seo/SEO';

export function BlogIndex() {
    return (
        <>
            <SEO title="Journal & Insights" description="Case studies and insights on bringing real, practical AI to small businesses." url="https://helloflint.agency/blog" />
            <div className="pt-32 pb-24 min-h-screen bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="max-w-2xl mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-trust/10 text-accent-trust text-xs font-mono font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            HelloFlint Journal
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading text-primary leading-tight tracking-tight mb-6">
                            Thoughts, builds, and breakthroughs.
                        </h1>
                        <p className="text-xl text-primary/60 font-sans leading-relaxed">
                            Case studies and insights on bringing real, practical AI to small businesses. No hype, just what works.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="group flex flex-col h-full bg-white border border-primary/5 rounded-card p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 hover:border-accent-action/20 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className={cn(
                                        "text-xs font-mono font-medium px-3 py-1 rounded-full",
                                        post.category === 'Success Story' ? 'bg-accent-success/10 text-accent-success' :
                                            post.category === 'Tech Insight' ? 'bg-accent-trust/10 text-accent-trust' :
                                                'bg-accent-action/10 text-accent-action'
                                    )}>
                                        {post.category}
                                    </span>
                                    <span className="text-primary/40 text-sm font-mono">{post.date}</span>
                                </div>

                                <h2 className="text-2xl font-heading text-primary mb-4 group-hover:text-accent-action transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-primary/70 mb-8 flex-1 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-bold text-primary group-hover:text-accent-action transition-colors mt-auto pt-6 border-t border-background-alt">
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
