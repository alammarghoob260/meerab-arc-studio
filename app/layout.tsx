import type { Metadata, Viewport } from 'next';
import { Cinzel, Josefin_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { OwnerProvider } from '@/components/OwnerProvider';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-josefin',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meerab-arc-studio.vercel.app'),
  title: 'Meerab Arc Studio | Luxury Interior Designer in Kolkata',
  description: 'Bespoke, functional and timeless home interiors in Kolkata led by Kamran Ali. Turnkey 2BHK, 3BHK, luxury living rooms, modern modular kitchens, and custom joinery.',
  keywords: [
    'Interior Designer Kolkata',
    'Home Interior Kolkata',
    'Meerab Arc Studio',
    'Kamran Ali Interior Designer',
    'Modular Kitchen Kolkata',
    '2BHK 3BHK Interior Design Kolkata',
    'Luxury Flat Interiors New Town Rajarhat Salt Lake'
  ],
  authors: [{ name: 'Kamran Ali - Meerab Arc Studio' }],
  openGraph: {
    title: 'Meerab Arc Studio | Thoughtful Interior Design in Kolkata',
    description: 'Designing spaces that feel like home. End-to-end interior execution across Kolkata.',
    images: ['/images/original_ma_logo_cropped.jpg'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${cinzel.variable} ${josefin.variable}`}>
      <body className="bg-[#FAF9F6] dark:bg-[#0A0A0A] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-studio-gold selection:text-black min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <OwnerProvider>
            {children}
          </OwnerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
