import {
    BarChart3,
    Settings,
    TrendingUp,
    Users,
    Code,
    Share2,
    Search,
    Globe,
    Smartphone,
    PenTool,
    Megaphone,
    Mail,
    Target,
    Layers,
    ShoppingBag,
    PlayCircle,
    Zap,
    Layout,
    GitBranch,
    Palette,
    Eye,
    CreditCard,
    Link
} from "lucide-react";

export const SOLUTION_DATA: Record<string, any> = {
    "data-analytics": {
        title: "Data Analytics &",
        subtitle: "Insights",
        description: "Turn raw data into actionable business intelligence. We help you decode user behavior and market trends to drive growth.",
        mainIcon: "BarChart3",
        orbitIcons: [
            { Icon: "TrendingUp", label: "Growth" },
            { Icon: "Search", label: "Insights" },
            { Icon: "Target", label: "Targeting" },
            { Icon: "Settings", label: "Optimization" },
            { Icon: "Layers", label: "Data" },
            { Icon: "Zap", label: "Speed" },
        ],
        approach: {
            label: "Analytics Approach",
            title: "Science-backed growth strategy.",
            description: "We don't just collect data; we interpret it to build a roadmap for your success.",
            steps: [
                { title: "Audit", description: "Deep dive into your existing data infrastructure.", Icon: "Search" },
                { title: "Strategy", description: "Defining KPIs that actually move the needle.", Icon: "Target" },
                { title: "Execution", description: "Implementation and continuous refinement.", Icon: "Zap" },
            ]
        },
        philosophies: [
            { title: "Truth in Numbers", description: "Data never lies, but interpretations can." },
            { title: "Real-time Action", description: "Insights are useless if they aren't timely." },
            { title: "User Centricity", description: "Every data point is a human decision." },
            { title: "Scalable Systems", description: "Build today for tomorrow's scale." },
        ]
    },
    "seo": {
        title: "Search Engine",
        subtitle: "Optimization",
        description: "Dominate search results and attract high-intent traffic. Our SEO strategies are built for the modern, AI-integrated web.",
        mainIcon: "Search",
        orbitIcons: [
            { Icon: "Globe", label: "Global Reach" },
            { Icon: "BarChart3", label: "Ranking" },
            { Icon: "PenTool", label: "Content" },
            { Icon: "Zap", label: "Performance" },
            { Icon: "Target", label: "Keywords" },
            { Icon: "Link", label: "Authority" },
        ],
        approach: {
            label: "SEO Strategy",
            title: "Be found where it matters most.",
            description: "Our SEO approach combines technical excellence with content that users love and search engines reward.",
            steps: [
                { title: "Technical Audit", description: "Ensuring your site is perfectly indexable.", Icon: "Settings" },
                { title: "Content Gap", description: "Identifying opportunities to own the conversation.", Icon: "PenTool" },
                { title: "Backlink Growth", description: "Building authority through quality connections.", Icon: "Share2" },
            ]
        },
        philosophies: [
            { title: "Quality Over Quantity", description: "One great link beats a hundred poor ones." },
            { title: "Long-term Value", description: "SEO is a marathon, not a sprint." },
            { title: "AI-Ready Content", description: "Optimize for both humans and AI crawlers." },
            { title: "Technical Integrity", description: "A fast, clean site is a ranked site." },
        ]
    },
};

// Helper function to get data with fallbacks
export const getSolutionData = (slug: string) => {
    return SOLUTION_DATA[slug] || {
        title: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        subtitle: "Solutions",
        description: `Leading expertise in ${slug.replace('-', ' ')} to help your business excel in the digital landscape.`,
        mainIcon: "Settings",
        orbitIcons: [
            { Icon: "Zap", label: "Fast" },
            { Icon: "Target", label: "Focused" },
            { Icon: "Globe", label: "Global" },
            { Icon: "BarChart3", label: "Data-driven" },
            { Icon: "Users", label: "User-centric" },
            { Icon: "Settings", label: "Scalable" },
        ],
        approach: {
            label: "Our Approach",
            title: "Methodical growth for digital leaders.",
            description: "We follow a proven framework to ensure consistent results across every project.",
            steps: [
                { title: "Discovery", description: "Understanding your unique business challenges.", Icon: "Search" },
                { title: "Strategy", description: "Crafting a bespoke plan for your goals.", Icon: "Target" },
                { title: "Growth", description: "Scaling what works for maximum impact.", Icon: "TrendingUp" },
            ]
        },
        philosophies: [
            { title: "Innovation", description: "Always pushing the boundaries of what's possible." },
            { title: "Transparency", description: "Honest communication and clear reporting." },
            { title: "Results", description: "Focused on metrics that drive business value." },
            { title: "Agility", description: "Moving fast and adapting to market changes." },
        ]
    };
};

