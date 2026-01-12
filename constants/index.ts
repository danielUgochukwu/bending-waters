export const navLinks = [
    { name: "About", link: "/about" },
    {
        name: "Solutions",
        link: "/solutions",
        dropdown: [
            {
                title: "Data & Analytics",
                items: [
                    "Data Analytics & Insights",
                    "Dashboard Development",
                    "Conversion Rate Optimization",
                    "User Experience",
                    "Front End Development",
                    "Ad Operations",
                ],
            },
            {
                title: "Earned Media",
                items: [
                    "AI Search Optimization",
                    "Search Engine Optimization",
                    "App Store Optimization",
                    "Content Marketing",
                    "Digital PR",
                    "Influencer Marketing",
                    "Organic Social Media",
                    "Email Marketing",
                ],
            },
            {
                title: "Paid Media",
                items: [
                    "Media Strategy & Planning",
                    "Paid Search",
                    "Paid Social",
                    "Programmatic & Display",
                    "Marketplaces",
                    "Streaming",
                ],
            },
            {
                title: "Creative",
                items: [
                    "Performance Creative",
                    "Branding",
                    "Content Production",
                    "Website Design",
                    "Graphic & Motion Design",
                    "Audio Production",
                ],
            },
        ],
    },
    { name: "Work", link: "/work" },
    { name: "News & Insights", link: "/news" },
    { name: "Careers", link: "/careers" },
    { name: "AI & Technology", link: "/ai" },
    { name: "Contact", link: "/contact" },
];

export interface Country {
    name: string;
    link: string;
    subItems?: { name: string; link: string }[];
}

export interface Region {
    region: string;
    countries: Country[];
}

export const globalLocations: Region[] = [
    {
        region: "EMEA",
        countries: [
            { name: "SMB", link: "#" },
            {
                name: "StartUps",
                link: "#",
            },
            { name: "Enterprises", link: "#" },
        ],
    },
];
