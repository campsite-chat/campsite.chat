import type { Metadata } from 'next';
import { Anybody, Inter } from 'next/font/google';

import './globals.css';
import Providers from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const anybody = Anybody({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anybody'
});

export const metadata: Metadata = {
  title: 'Campsite',
  description: 'A new social platform built from the ground up with Rust and TypeScript to bring you a secure, fast, and sleek-looking chat app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${anybody.variable}`}>
      <body className="w-full min-h-screen text-black bg-snow-100 dark:bg-charcoal-900 dark:text-white">
        <Providers>
          <div
            style={{
              background: `radial-gradient(rgba(255, 255, 255, 0.1) 8%, transparent 8%)`,
              backgroundPosition: "0% 0%",
              backgroundSize: "2.5vmin 2.5vmin",
              height: "100vh",
              zIndex: 5,
            }}
          >
            <div className='max-w-[100rem] m-auto'>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html >
  )
}
