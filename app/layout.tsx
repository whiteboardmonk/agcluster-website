import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgCluster - Developer Platform for Claude Agent SDK",
  description: "Self-hosted platform for Claude Agent SDK with integrated Web UI, real-time monitoring, and task tracking. Deploy agents with full visibility and control.",
  keywords: ["claude", "agent sdk", "developer platform", "web ui dashboard", "agent monitoring", "docker containers", "self-hosted ai", "real-time monitoring", "claude sdk deployment", "task tracking"],
  authors: [{ name: "AgCluster Team" }],
  openGraph: {
    title: "AgCluster - Developer Platform for Claude Agent SDK",
    description: "Self-hosted platform for Claude Agent SDK with integrated Web UI, real-time monitoring, and task tracking.",
    type: "website",
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
      </body>
    </html>
  );
}
