import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

export const metadata: Metadata = {
  title: "Maintor - Learn AI. For free. Forever.",
  description: "Master 40+ AI tools with gamified lessons. Join 50,000+ learners building their AI skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
