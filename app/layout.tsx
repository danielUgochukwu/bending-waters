import type { Metadata } from "next";
import { Poppins, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Providers from "@/components/Providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title:
    "BendingWaters - We build strategic growth infrastructure for real business outcomes",
  description: "",
  openGraph: {
    title: "BendingWaters - We build strategic growth infrastructure for real business outcomes",
    description: "",
    url: "https://www.bendingwaters.africa",
    siteName: "BendingWaters",
    images: [
      {
        url: "/images/creative.png",
        width: 1200,
        height: 630,
        alt: "fashion"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${jost.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          {children}
          <SmoothScroll />
        </Providers>
      </body>
    </html>
  );
}
