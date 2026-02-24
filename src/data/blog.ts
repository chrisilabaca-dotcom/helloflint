export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML representation
    date: string;
    category: 'Success Story' | 'Tech Insight' | 'Behind the Scenes';
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'how-a-local-accounting-firm-saved-20-hours-a-week',
        title: 'How a Local Accounting Firm Saved 20 Hours a Week',
        excerpt: 'Discover how we built a custom AI assistant that entirely automated initial client qualification and document chasing for an established firm.',
        category: 'Success Story',
        date: 'Feb 14, 2026',
        readTime: '4 min read',
        content: `Running a busy accountancy practice means spending half the week just chasing signatures and qualifying whether a lead actually needs your services.
    
We worked with a local firm to implement an AI assistant integrated directly into their existing WhatsApp business number. The assistant learned their pricing structures, their service limitations, and their onboarding requirements. 

Now, when a potential client texts, the assistant routes the conversation, qualifies the context, and only hands over the chat when the lead is warm and the documentation is ready.

The result? Over 20 hours saved weekly.`
    },
    {
        slug: 'understanding-context-windows-for-small-business',
        title: 'Why Context Windows Matter for Your Business Bot',
        excerpt: 'A non-technical explanation of memory in AI, and why choosing the right model architecture changes how your assistant performs.',
        category: 'Tech Insight',
        date: 'Jan 08, 2026',
        readTime: '6 min read',
        content: `AI models are powerful, but they are limited by what they can "remember" at any given second. This is called a Context Window.

Imagine walking into a meeting. If you can only remember the last 5 minutes of conversation, you're going to give very bad advice. The same applies to an AI assistant built for your business.

At HelloFlint, we configure our assistants (powered by Anthropic's Claude) to maintain massive context windows. This means the AI doesn't just remember the user's name; it remembers your entire business manual, your pricing strategy, and the subtle tone of voice you want to project, all at the exact moment it replies to a customer.`
    },
    {
        slug: 'the-helloflint-approach-to-prompting',
        title: 'Designing the "Warm Efficiency" Prompt',
        excerpt: 'Robots shouldn\'t sound like robots. Here is how we engineer our prompts so your business sounds human, professional, and entirely tailored.',
        category: 'Behind the Scenes',
        date: 'Nov 22, 2025',
        readTime: '5 min read',
        content: `There is nothing worse than an automated response that sounds like it was written by a 1990s switchboard operator. 

When we build a system at HelloFlint, 40% of our time is spent just on the "Master Prompt". We want the assistant to feel like a highly capable, slightly formal, but ultimately warm human being working at your company.

We call this "Warm Efficiency." It's the difference between a bot that says "Error: Please provide invoice number" and an assistant that says "I can definitely check that for you—do you happen to have the invoice number handy?"`
    }
];
