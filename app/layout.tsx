import type { Metadata, Viewport } from 'next';

import CommandMenu from '@/components/CommandMenu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { person } from '@/lib/site';

import './globals.css';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL('https://denish2410.github.io'),
  title: { default: `${person.name}: full stack developer and case files`, template: `%s | ${person.name}` },
  description:
    'Denish Ahalpara is a computer engineering student and MERN full stack developer. Internships, hackathon builds and full stack projects.',
  icons: { icon: `${base}/favicon.svg` },
  openGraph: {
    type: 'website',
    url: `${base}/`,
    siteName: person.name,
    title: `${person.name}: case files`,
    description: 'Full stack products and hackathon builds, each with its own case file.',
  },
};

export const viewport: Viewport = { themeColor: '#e9edf1' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Saira+Stencil+One&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CommandMenu />
      </body>
    </html>
  );
}
