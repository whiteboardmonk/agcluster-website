import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agcluster.dev"),
  title: "AgCluster - Claude Agent Cloud",
  description: "Claude Agent Cloud - Self-hosted platform for Claude Agent SDK with integrated Web UI, real-time monitoring, and task tracking. Deploy agents with full visibility and control.",
  keywords: ["claude agent cloud", "claude", "agent sdk", "developer platform", "web ui dashboard", "agent monitoring", "docker containers", "self-hosted ai", "real-time monitoring", "claude sdk deployment", "task tracking"],
  authors: [{ name: "AgCluster Team" }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
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
