"use client";

import { animate } from "motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimatedLogo() {
    const path = usePathname();

    useEffect(() => {
        if (path !== "/") {
            animate("#tri", {
                opacity: [0.1, 1],
                y: [-25, 0],
                x: [-25, 0],
            }, { duration: 0.75, easing: "ease", });

            animate("#tent", {
                opacity: [0.1, 1],
                y: [25, 0],
                x: [25, 0],
            }, { duration: 0.75, easing: "ease", });
        };
    });

    return (
        <>
            {path === "/" ? (
                <svg width="48" height="24" viewBox="0 0 48 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.8222 21.9889L34.8553 0.655634C34.6274 0.249328 34.2124 0 33.764 0H14.2692C13.2883 0 12.6793 1.1222 13.1778 2.01102L25.1447 23.3443C25.3726 23.7507 25.7876 24 26.236 24H45.7308C46.7118 24 47.3208 22.8778 46.8222 21.9889Z" />
                    <path d="M18.4288 24H1.57094C0.387987 24 -0.369445 22.6107 0.185352 21.4584L8.14588 4.919C8.72 3.72637 10.2562 3.68616 10.8809 4.84741L19.7779 21.3866C20.3985 22.5402 19.6447 24 18.4288 24Z" />
                </svg>
            ) : (
                <svg width="48" height="24" viewBox="0 0 48 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path id="tent" d="M46.8222 21.9889L34.8553 0.655634C34.6274 0.249328 34.2124 0 33.764 0H14.2692C13.2883 0 12.6793 1.1222 13.1778 2.01102L25.1447 23.3443C25.3726 23.7507 25.7876 24 26.236 24H45.7308C46.7118 24 47.3208 22.8778 46.8222 21.9889Z" />
                    <path id="tri" d="M18.4288 24H1.57094C0.387987 24 -0.369445 22.6107 0.185352 21.4584L8.14588 4.919C8.72 3.72637 10.2562 3.68616 10.8809 4.84741L19.7779 21.3866C20.3985 22.5402 19.6447 24 18.4288 24Z" />
                </svg>
            )}
            {/* <h1 id="head" className="hidden text-3xl font-bold font-display sm:block">
                Campsite
            </h1> */}
        </>
    )
}