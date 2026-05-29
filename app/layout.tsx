import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import NoiseOverlay from '@/components/NoiseOverlay';

import Preloader from '@/components/Preloader';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const neueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/Neue Montreal Font/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue Montreal Font/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue Montreal Font/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-neue-montreal'
});

const formula = localFont({
  src: [
    {
      path: '../public/fonts/Formula Font/Formula Condensed - Free for personal use/FormulaCondensed-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-formula'
});

export const metadata: Metadata = {
  title: 'Soham Pawar | Software Developer',
  description: 'Portfolio of Soham Pawar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${neueMontreal.variable} ${formula.variable} font-sans bg-[#111111] text-[#EFEFEF] antialiased overflow-x-clip`}>
        <Preloader />
        <SmoothScroll>
          <NoiseOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
