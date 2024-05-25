import type { Metadata } from "next";
import { REM } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

const rem = REM({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Coming Soon",
    description: "Time to cut the cord.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={rem.className}>
                <ThemeProvider storageKey="theme" defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
