import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agcluster.dev"),
  title: "AgCluster - Claude Agent Cloud",
  description: "Claude Agent Cloud - Self-hosted platform for Claude Agent SDK with integrated Web UI, real-time monitoring, and task tracking. Deploy agents with full visibility and control.",
  keywords: ["claude agent cloud", "claude", "agent sdk", "developer platform", "web ui dashboard", "agent monitoring", "docker containers", "self-hosted ai", "real-time monitoring", "claude sdk deployment", "task tracking"],
  authors: [{ name: "AgCluster Team" }],
  openGraph: {
    title: "AgCluster - Claude Agent Cloud",
    description: "Claude Agent Cloud - Self-hosted platform for Claude Agent SDK with integrated Web UI, real-time monitoring, and task tracking.",
    type: "website",
    url: "https://www.agcluster.dev",
    siteName: "AgCluster",
    images: [
      {
        url: "/agcluster-og.png",
        width: 1200,
        height: 630,
        alt: "AgCluster - Claude Agent Cloud Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgCluster - Claude Agent Cloud",
    description: "Claude Agent Cloud - Self-hosted platform for Claude Agent SDK with integrated Web UI, real-time monitoring, and task tracking.",
    images: ["/agcluster-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
