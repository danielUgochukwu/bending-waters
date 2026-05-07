import {
  Activity,
  Box,
  Circle,
  Code,
  Command,
  Cpu,
  Fingerprint,
  Globe,
  Hexagon,
  Layers,
  LayoutDashboard,
  Sparkles,
  Target,
  Triangle,
  type LucideIcon,
} from "lucide-react";

export type CardType = "ui" | "dark" | "gradient" | "light";

export type ProductCardData = {
  id: string;
  brandColor: string;
  border?: string;
  type: CardType;
  icon: LucideIcon;
  name: string;
  desc: string;
};

export const CARD_DATA: ProductCardData[] = [
  {
    id: "c1",
    brandColor: "bg-blue-600",
    type: "ui",
    icon: Command,
    name: "NexusFlow",
    desc: "Workflow automation",
  },
  {
    id: "c2",
    brandColor: "bg-[#0a0a0a]",
    border: "border-[#a3ff90]/30",
    type: "dark",
    icon: Activity,
    name: "Pulse",
    desc: "Real-time analytics",
  },
  {
    id: "c3",
    brandColor: "bg-gradient-to-br from-orange-400 to-red-500",
    type: "gradient",
    icon: Triangle,
    name: "Ignite",
    desc: "Growth engine",
  },
  {
    id: "c4",
    brandColor: "bg-zinc-100 text-black",
    type: "light",
    icon: LayoutDashboard,
    name: "Structur",
    desc: "Enterprise CMS",
  },
  {
    id: "c5",
    brandColor: "bg-emerald-900",
    type: "ui",
    icon: Globe,
    name: "EcoScale",
    desc: "Global deployment",
  },
  {
    id: "c6",
    brandColor: "bg-purple-600",
    type: "gradient",
    icon: Hexagon,
    name: "Polymer",
    desc: "Design systems",
  },
  {
    id: "c7",
    brandColor: "bg-black",
      border: "border-white/10",
    type: "dark",
    icon: Fingerprint,
    name: "AuthX",
    desc: "Identity provider",
  },
  {
    id: "c8",
    brandColor: "bg-pink-500",
    type: "ui",
    icon: Sparkles,
    name: "Chroma",
    desc: "Generative assets",
  },
  {
    id: "c9",
    brandColor: "bg-indigo-950",
    type: "dark",
    icon: Code,
    name: "Syntax",
    desc: "Cloud IDE",
  },
  {
    id: "c10",
    brandColor: "bg-rose-900",
    type: "gradient",
    icon: Target,
    name: "Bullseye",
    desc: "Ad attribution",
  },
  {
    id: "c11",
    brandColor: "bg-teal-500",
    type: "light",
    icon: Box,
    name: "Vault",
    desc: "Secure storage",
  },
  {
    id: "c12",
    brandColor: "bg-slate-800",
    type: "ui",
    icon: Cpu,
    name: "Compute",
    desc: "Edge servers",
  },
  {
    id: "c13",
    brandColor: "bg-gradient-to-tr from-violet-600 to-fuchsia-600",
    type: "gradient",
    icon: Layers,
    name: "Stack",
    desc: "Infrastructure",
  },
  {
    id: "c14",
    brandColor: "bg-[#111]",
    border: "border-zinc-800",
    type: "dark",
    icon: Circle,
    name: "Orbit",
    desc: "Team collaboration",
  },
];
