
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'IFM | Futuristic Blockchain Football Manager',
  description: 'Elite football manager meets Web3 esports. Experience the cinematic football ecosystem of the future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-secondary selection:text-white">
        <div className="relative flex min-h-screen flex-col">
          <div className="fixed inset-0 pointer-events-none z-0 opacity-40 football-grid" />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
