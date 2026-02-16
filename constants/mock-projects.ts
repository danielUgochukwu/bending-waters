export interface Project {
    _id: string;
    title: string;
    category: string;
    slug: { current: string };
    image: string; // Used for listing
    mainImage?: string; // Used for detail, can fallback to image
    publishedAt?: string;
    body?: any[]; // Portable Text
}

export const MOCK_PROJECTS: Project[] = [
    {
        _id: "1",
        title: "AI SEO Intelligence",
        category: "AI SEO",
        slug: { current: "ai-seo-intelligence" },
        image: "/images/dashboard_launch.png",
        publishedAt: "2024-01-15T10:00:00Z",
        body: [
            {
                _key: "1",
                _type: "block",
                style: "normal",
                children: [{ _key: "1a", _type: "span", text: "Leveraging advanced artificial intelligence to revolutionize search engine optimization strategies. Our AI-driven approach analyzes millions of data points to predict algorithm changes and optimize content in real-time." }],
            },
            {
                _key: "2",
                _type: "block",
                style: "h2",
                children: [{ _key: "2a", _type: "span", text: "The Result" }],
            },
            {
                _key: "3",
                _type: "block",
                style: "normal",
                children: [{ _key: "3a", _type: "span", text: "A 300% increase in organic traffic within the first quarter, demonstrating the power of predictive SEO models." }],
            }
        ]
    },
    {
        _id: "2",
        title: "Global Paid Media",
        category: "Paid Media",
        slug: { current: "global-paid-media" },
        image: "/images/dashboard_pay.png",
        publishedAt: "2024-02-01T10:00:00Z",
        body: [
            {
                _key: "1",
                _type: "block",
                style: "normal",
                children: [{ _key: "1a", _type: "span", text: "Orchestrating a multi-channel paid media campaign across 5 continents. We utilized programmatic buying and dynamic creative optimization to reach diverse audiences effectively." }],
            }
        ]
    },
    {
        _id: "3",
        title: "Immersive Creative Brand",
        category: "Creative",
        slug: { current: "immersive-creative" },
        image: "/images/creative.png",
        publishedAt: "2024-02-20T10:00:00Z",
        body: [
            {
                _key: "1",
                _type: "block",
                style: "normal",
                children: [{ _key: "1a", _type: "span", text: "Redefining brand identity through immersive visual storytelling. This project involved 3D motion graphics and interactive web experiences." }],
            }
        ]
    },
    {
        _id: "4",
        title: "Viral Content Strategy",
        category: "Content",
        slug: { current: "viral-content-strategy" },
        image: "/images/writing_service.png",
        publishedAt: "2024-03-05T10:00:00Z",
        body: [
            {
                _key: "1",
                _type: "block",
                style: "normal",
                children: [{ _key: "1a", _type: "span", text: "Crafting content that resonates and spreads. Our data-backed content strategy achieved viral reach on major social platforms." }],
            }
        ]
    },
    {
        _id: "5",
        title: "Social Community Growth",
        category: "Social Media",
        slug: { current: "social-community-growth" },
        image: "/images/social_media_service.png",
        publishedAt: "2024-03-15T10:00:00Z",
        body: [
            {
                _key: "1",
                _type: "block",
                style: "normal",
                children: [{ _key: "1a", _type: "span", text: "Building genuine connections. We grew the community from 10k to 100k active members through engagement-focused campaigns." }],
            }
        ]
    },
    {
        _id: "6",
        title: "E-Commerce App Launch",
        category: "App Store",
        slug: { current: "ecommerce-app-launch" },
        image: "/images/design_service.png",
        publishedAt: "2024-04-01T10:00:00Z",
        body: [
            {
                _key: "1",
                _type: "block",
                style: "normal",
                children: [{ _key: "1a", _type: "span", text: "Launching a next-gen e-commerce application. Focus was on ASO (App Store Optimization) and user acquisition strategies." }],
            }
        ]
    },
    // Duplicates with unique slugs for correct routing
    {
        _id: "7",
        title: "E-Commerce Rebranding",
        category: "App Store",
        slug: { current: "ecommerce-rebranding" },
        image: "/images/design_service.png",
        publishedAt: "2024-04-10T10:00:00Z",
        body: [{ _key: "1", _type: "block", style: "normal", children: [{ _type: "span", text: "A complete visual overhaul for a leading e-commerce platform." }] }]
    },
    {
        _id: "8",
        title: "Marketplace Optimization",
        category: "App Store",
        slug: { current: "marketplace-optimization" },
        image: "/images/design_service.png",
        publishedAt: "2024-04-20T10:00:00Z",
        body: [{ _key: "1", _type: "block", style: "normal", children: [{ _type: "span", text: "Optimizing the marketplace for higher conversion rates." }] }]
    },
    {
        _id: "9",
        title: "Community Engagement",
        category: "Social Media",
        slug: { current: "community-engagement" },
        image: "/images/social_media_service.png",
        publishedAt: "2024-05-01T10:00:00Z",
        body: [{ _key: "1", _type: "block", style: "normal", children: [{ _type: "span", text: "Engagement strategies that turned followers into brand advocates." }] }]
    },
    {
        _id: "10",
        title: "Influencer Campaign",
        category: "Social Media",
        slug: { current: "influencer-campaign" },
        image: "/images/social_media_service.png",
        publishedAt: "2024-05-15T10:00:00Z",
        body: [{ _key: "1", _type: "block", style: "normal", children: [{ _type: "span", text: "Collaborating with top tier influencers to drive brand awareness." }] }]
    },
    {
        _id: "11",
        title: "Social Analytics",
        category: "Social Media",
        slug: { current: "social-analytics" },
        image: "/images/social_media_service.png",
        publishedAt: "2024-06-01T10:00:00Z",
        body: [{ _key: "1", _type: "block", style: "normal", children: [{ _type: "span", text: "Deep dive into social metrics to guide future content strategies." }] }]
    },
    {
        _id: "12",
        title: "Brand Voice",
        category: "Social Media",
        slug: { current: "brand-voice" },
        image: "/images/social_media_service.png",
        publishedAt: "2024-06-15T10:00:00Z",
        body: [{ _key: "1", _type: "block", style: "normal", children: [{ _type: "span", text: "Developing a unique and consistent voice across all social channels." }] }]
    },
];

export function getMockProject(slug: string): Project | undefined {
    return MOCK_PROJECTS.find(p => p.slug.current === slug);
}
