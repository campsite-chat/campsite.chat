"use client"

import { animate } from "motion"
import { useEffect } from "react"
import { Balancer } from "react-wrap-balancer";

export default function HomeHeader() {
    useEffect(() => {
        animate("#aside", {
            opacity: [0, 1],
        }, { duration: 1, easing: "ease" });

        animate("#a", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 0.50 });

        animate("#b", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 0.65 });

        animate("#c", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 0.80 });

        animate("#d", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 1.5 });

        animate("#e", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 1.65 });

        animate("#f", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 1.80 });

        animate("#rest", {
            opacity: [0, 1],
        }, { duration: 0.75, easing: "ease", delay: 1.85 });

        animate("#home-triangle", {
            opacity: [0.1, 1],
            y: [-25, 0],
            x: [-25, 0],
        }, { duration: 0.75, easing: "ease", });

        animate("#home-tent", {
            opacity: [0.1, 1],
            y: [25, 0],
            x: [25, 0],
        }, { duration: 0.75, easing: "ease", });

    });

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-6 pt-48 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" fill="none" className="w-64">
                    <g filter="url(#filter0_d_13_2)" id="home-tent">
                        <path d="M538.002 252.851L412.596 34.2604C410.208 30.0972 405.859 27.5425 401.16 27.5425H196.865C186.585 27.5425 180.203 39.041 185.427 48.1483L310.834 266.739C313.222 270.903 317.571 273.458 322.27 273.458H526.565C536.845 273.458 543.227 261.959 538.002 252.851Z" fill="currentColor" />
                    </g>
                    <g filter="url(#filter1_d_13_2)" id="home-triangle">
                        <path d="M245.083 273.458H70.8614C58.636 273.458 50.8082 259.45 56.5418 247.831L138.812 81.073C144.745 69.0483 160.621 68.6429 167.077 80.3512L259.026 247.108C265.439 258.739 257.649 273.458 245.083 273.458Z" fill="currentColor" />
                    </g>
                    <defs>
                        <filter id="filter0_d_13_2" x="183.564" y="27.5425" width="390.302" height="271.915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="28" dy="20" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_2" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_2" result="shape" />
                        </filter>
                        <filter id="filter1_d_13_2" x="54.6263" y="71.8072" width="240.694" height="227.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="28" dy="20" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_2" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_2" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <div className="flex flex-col gap-2 pt-8">
                    <aside className='text-neutral-400' id="aside">
                        Introducting Campsite...
                    </aside>
                    <h1 className='font-sans text-2xl font-black lg:text-7xl'>
                        <span id="a">
                            A {" "}
                        </span>
                        <span id="b">
                            chat {" "}
                        </span>
                        <span id="c">
                            platform, {" "}
                        </span>
                        <span id="d">
                            from {" "}
                        </span>
                        <span id="e">
                            the {" "}
                        </span>
                        <span id="f">
                            future. {" "}
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col gap-4" id="rest">
                    <p className="text-neutral-400">
                        <Balancer>
                            An all-in-one cutting-edge communication platform that's free, secure, and works on your desktop and phone <small>(soon).</small> <br /> <br className="block md:hidden" />
                            Cut the cord and join the future of communication.
                        </Balancer>
                    </p>
                </div>
            </div>
        </>
    )
}