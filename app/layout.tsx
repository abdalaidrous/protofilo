import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intuitive Pixel — Portfolio',
  description: 'Modern UI/UX and graphic designer portfolio built with Next.js and Tailwind.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="tailwind-cdn" src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">{`
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  bg: '#07060c',
                  panel: 'rgba(255,255,255,0.06)',
                  panel2: 'rgba(255,255,255,0.08)',
                  stroke: 'rgba(255,255,255,0.12)',
                  text: '#ecebff',
                  muted: 'rgba(236,235,255,0.72)',
                  purple: '#8b2cff',
                  purple2: '#d21bff',
                },
                boxShadow: {
                  glow: '0 20px 60px rgba(0,0,0,0.55)',
                  pill: '0 18px 40px rgba(139,44,255,0.25)',
                },
                borderRadius: {
                  xl: '18px',
                  '2xl': '26px',
                },
              },
            },
          };
        `}</Script>
      </head>
      <body className={`${inter.className} bg-bg text-text antialiased`}>{children}</body>
    </html>
  );
}
