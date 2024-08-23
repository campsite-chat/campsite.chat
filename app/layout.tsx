import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { SiteFooter } from "~/components/footer"
import { Header } from "~/components/header"
import { ThemeProvider } from "~/components/theme/provider"
import Particles from "~/components/ui/particles"
import { Toaster } from "~/components/ui/sonner"
import { ny } from "~/lib/utils"

import "~/styles/globals.css"

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
})
export const metadata: Metadata = {
   title: "Campsite",
   description: "Time to cut the cord.",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={ny(
               "bg-background min-h-screen font-sans antialiased",
               fontSans.variable,
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               disableTransitionOnChange
            >
               <Header />
               <main className="mx-auto flex-1 overflow-hidden">
                  {children}
                  <Particles
                     className="absolute inset-0 -z-10"
                     quantity={50}
                     ease={70}
                     size={0.05}
                     staticity={40}
                     color="#ffffff"
                  />
               </main>
               <SiteFooter />
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   )
}
