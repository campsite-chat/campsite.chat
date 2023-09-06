"use client";

import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import AnimatedLogo from "./logo";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="sticky top-0 flex flex-row px-3 pt-3 sm:px-6 sm:pt-6">
                <div className="flex flex-row items-center justify-between w-full p-4 border rounded-lg border-white/10 bg-neutral-900/10 backdrop-blur-md">
                    <div className="flex flex-row items-center gap-3">
                        <Link href="/">
                            <AnimatedLogo />
                        </Link>
                    </div>
                    <div className="flex-row hidden gap-8 sm:flex">
                        <Link href="/download">
                            <button className="transition-all duration-300 dark:text-neutral-400 dark:hover:text-white underline-offset-4">
                                Download
                            </button>
                        </Link>
                        <Link href="/blog">
                            <button className="transition-all duration-300 dark:text-neutral-400 dark:hover:text-white underline-offset-4">
                                Blog
                            </button>
                        </Link>
                        <Link href="/support">
                            <button className="transition-all duration-300 dark:text-neutral-400 dark:hover:text-white underline-offset-4">
                                Support
                            </button>
                        </Link>
                        {/* <Link href="https://status.campsite.chat">
                            <button className="transition-all duration-300 underline-offset-4">
                                Status
                            </button>
                        </Link> */}
                    </div>
                    <div className="flex flex-row gap-2">
                        <ThemeToggle />
                        <div className="flex flex-row sm:hidden">
                            <Button size="icon" variant="ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}