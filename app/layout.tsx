import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
