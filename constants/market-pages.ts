import {
  Palette,
  Megaphone,
  Globe,
  Camera,
  Rocket,
  BarChart3,
  BrainCircuit,
  Building2,
  ShieldCheck,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type MarketPageKey = "smb" | "startup" | "enterprise";
export type MarketTheme = "warm" | "bold" | "premium";

export type MarketService = {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type MarketFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type MarketPageData = {
  eyebrow: string;
  badgeText: string;
  title: string;
  description: string;
  ctaText: string;
  theme: MarketTheme;
  servicesTitle: string;
  servicesAccent: string;
  services: MarketService[];
  featureTitle: string;
  featureDescription: string;
  features: MarketFeature[];
};

export const marketPages: Record<MarketPageKey, MarketPageData> = {
  smb: {
    eyebrow: "For small businesses",
    badgeText: "Built for practical growth",
    title: "Build, grow, and scale your business — without doing it alone",
    description:
      "BendingWaters helps small businesses earn trust, improve visibility, and build digital systems that support sustainable growth.",
    ctaText: "Get growth support",
    theme: "warm",
    servicesTitle: "Built for business owners building",
    servicesAccent: "real businesses",
    services: [
      {
        title: "Brand Identity",
        imageSrc: "/images/design_service.png",
        imageAlt: "Brand design desk with creative materials",
      },
      {
        title: "Content Writing",
        imageSrc: "/images/writing_service.png",
        imageAlt: "Writing and editorial workspace",
      },
      {
        title: "Social Media",
        imageSrc: "/images/social_media_service.png",
        imageAlt: "Social media planning and marketing content",
      },
      {
        title: "Photography",
        imageSrc: "/images/photography_service.png",
        imageAlt: "Photography service setup",
      },
      {
        title: "Videography",
        imageSrc: "/images/videography_service.png",
        imageAlt: "Videography production setup",
      },
    ],
    featureTitle: "Practical support for owners who need execution, not noise.",
    featureDescription:
      "From brand storytelling to simple digital systems, we help SMBs show up clearly and convert attention into customers.",
    features: [
      {
        icon: Palette,
        title: "Branding & Creative",
        description:
          "Identity, visuals, and messaging that make your business easier to trust.",
      },
      {
        icon: Megaphone,
        title: "Digital Marketing",
        description:
          "Campaigns, social media, and simple funnels built around real business goals.",
      },
      {
        icon: Globe,
        title: "Websites & Stores",
        description:
          "Conversion-focused websites, landing pages, and ecommerce setups.",
      },
      {
        icon: Camera,
        title: "Content & Storytelling",
        description:
          "Photo, video, and copy that communicate your value clearly.",
      },
    ],
  },

  startup: {
    eyebrow: "For startups",
    badgeText: "For teams with traction",
    title: "Turn early traction into a brand customers and investors trust",
    description:
      "We help startups sharpen positioning, launch campaigns, validate channels, and build growth systems for the next stage.",
    ctaText: "Plan a launch",
    theme: "bold",
    servicesTitle: "For startups ready to move from",
    servicesAccent: "traction to scale",
    services: [
      { title: "Go-to-Market Strategy" },
      { title: "Launch Campaigns" },
      { title: "Performance Marketing" },
      { title: "Growth Analytics" },
      { title: "Founder Storytelling" },
    ],
    featureTitle:
      "A creative growth engine for startups that already have momentum.",
    featureDescription:
      "We do not validate ideas. We help proven teams package what works, reach better audiences, and build repeatable growth.",
    features: [
      {
        icon: Rocket,
        title: "Launch Strategy",
        description:
          "Positioning, messaging, and campaign planning for market entry or expansion.",
      },
      {
        icon: BarChart3,
        title: "Growth Funnels",
        description:
          "Acquisition flows, landing pages, tracking, and conversion optimization.",
      },
      {
        icon: BrainCircuit,
        title: "AI-Assisted Insights",
        description:
          "Audience profiling, campaign analysis, and smarter creative testing.",
      },
      {
        icon: Megaphone,
        title: "Performance Campaigns",
        description:
          "Paid and organic campaigns designed to prove and scale demand.",
      },
    ],
  },

  enterprise: {
    eyebrow: "For enterprise teams",
    badgeText: "Strategic growth systems",
    title:
      "Build intelligent brand, marketing, and data systems for market leadership",
    description:
      "BendingWaters partners with larger teams to improve customer trust, campaign intelligence, and digital execution at scale.",
    ctaText: "Talk to strategy team",
    theme: "premium",
    servicesTitle: "Enterprise growth powered by",
    servicesAccent: "strategy, data, and systems",
    services: [
      { title: "Strategic Consulting" },
      { title: "Data & AI Analytics" },
      { title: "Technology Buildouts" },
      { title: "Brand Systems" },
      { title: "Media Operations" },
    ],
    featureTitle:
      "Structured execution for teams that need clarity, governance, and scale.",
    featureDescription:
      "We combine consulting, creative systems, analytics, and technology delivery to help enterprise teams move faster without losing strategic control.",
    features: [
      {
        icon: Building2,
        title: "Strategic Consulting",
        description:
          "Growth planning, positioning, stakeholder alignment, and market strategy.",
      },
      {
        icon: BrainCircuit,
        title: "Data & AI Systems",
        description:
          "Analytics dashboards, AI workflows, campaign intelligence, and automation.",
      },
      {
        icon: ShieldCheck,
        title: "Brand Governance",
        description:
          "Consistent messaging, quality control, and scalable creative operations.",
      },
      {
        icon: LineChart,
        title: "Performance Reporting",
        description:
          "Decision-ready reporting across campaigns, channels, and customer journeys.",
      },
    ],
  },
};
