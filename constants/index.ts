import { NavLink } from "@/types";
import { ArrowUpRight, BarChart3, BookOpen, Target, TrendingUp, Zap } from "lucide-react";

export const navLinks = [
  { name: "About", link: "/about" },
  {
    name: "Solutions",
    dropdown: [
      {
        title: "Data & Analytics",
        items: [
          {
            name: "Data Analytics & Insights",
            link: "/solutions/data-analytics",
          },
          {
            name: "Dashboard Development",
            link: "/solutions/dashboard-development",
          },
          { name: "Conversion Rate Optimization", link: "/solutions/cro" },
          { name: "User Experience", link: "/solutions/ux" },
          { name: "Front End Development", link: "/solutions/frontend-dev" },
          { name: "Ad Operations", link: "/solutions/ad-ops" },
        ],
      },
      {
        title: "Earned Media",
        items: [
          { name: "AI Search Optimization", link: "/solutions/ai-search" },
          { name: "Search Engine Optimization", link: "/solutions/seo" },
          { name: "App Store Optimization", link: "/solutions/aso" },
          { name: "Content Marketing", link: "/solutions/content-marketing" },
          { name: "Digital PR", link: "/solutions/digital-pr" },
          {
            name: "Influencer Marketing",
            link: "/solutions/influencer-marketing",
          },
          { name: "Organic Social Media", link: "/solutions/social-media" },
          { name: "Email Marketing", link: "/solutions/email-marketing" },
        ],
      },
      {
        title: "Paid Media",
        items: [
          {
            name: "Media Strategy & Planning",
            link: "/solutions/media-strategy",
          },
          { name: "Paid Search", link: "/solutions/paid-search" },
          { name: "Paid Social", link: "/solutions/paid-social" },
          { name: "Programmatic & Display", link: "/solutions/programmatic" },
          { name: "Marketplaces", link: "/solutions/marketplaces" },
          { name: "Streaming", link: "/solutions/streaming" },
        ],
      },
      {
        title: "Creative",
        items: [
          {
            name: "Performance Creative",
            link: "/solutions/performance-creative",
          },
          { name: "Branding", link: "/solutions/branding" },
          { name: "Content Production", link: "/solutions/content-production" },
          { name: "Website Design", link: "/solutions/creative/web-design" },
          {
            name: "Graphic & Motion Design",
            link: "/solutions/graphic-design",
          },
          { name: "Audio Production", link: "/solutions/audio-production" },
        ],
      },
    ],
  },
  { name: "Work", link: "/work" },
  { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "AI & Technology", link: "/ai" },
  { name: "Contact", link: "/contact" },
] satisfies NavLink[];

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
      { name: "SMB", link: "/smb" },
      {
        name: "StartUps",
        link: "/startups",
      },
      { name: "Enterprises", link: "/enterprise" },
    ],
  },
];

export const BUSINESS_UNITS = [
  {
    code: "01",
    name: "BW Marketing Collective",
    tagline: "The execution engine. Campaigns, content, consulting.",
  },
  {
    code: "02",
    name: "BW Media",
    tagline: "YouTube, podcasts, newsletters. Audience at scale.",
  },
  {
    code: "03",
    name: "BW Labs",
    tagline: "AudienceGPT, FinAd Studio, AI analytics dashboards.",
  },
  {
    code: "04",
    name: "BW Academy",
    tagline: "Certifications, webinars, community programmes.",
  },
  {
    code: "05",
    name: "BW Ventures",
    tagline: "Minority equity, mentorship & media amplification.",
  },
];

export const SERVICES = [
  { label: "Paid Search & Social", icon: Target },
  { label: "SEO & GEO", icon: TrendingUp },
  { label: "AI Audience Profiling", icon: Zap },
  { label: "Content & Brand Strategy", icon: BookOpen },
  { label: "Data & Analytics", icon: BarChart3 },
  { label: "Performance Creative", icon: Target },
  { label: "Influencer Marketing", icon: TrendingUp },
  { label: "App Store Optimisation", icon: Zap },
  { label: "Technology Buildouts", icon: BarChart3 },
  { label: "Consulting & Strategy", icon: BookOpen },
  { label: "Digital PR", icon: TrendingUp },
  { label: "Other", icon: ArrowUpRight },
];

export const STATS = [
  { value: "5+", label: "Business Units" },
  { value: "₦1B", label: "2030 Revenue Target" },
  { value: "40%", label: "Gross Margin (2030)" },
];