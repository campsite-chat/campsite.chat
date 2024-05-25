import { SVGProps } from "react";

const Campsite = (props: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1020"
                height="527"
                viewBox="0 0 1020 527"
                {...props}
            >
                <g filter="url(#filter0_d_21_2)">
                    <path
                        d="M981.25 458.941L726.216 13.7729C721.359 5.29432 712.514 0.0914917 702.958 0.0914917H287.49C266.584 0.0914917 253.605 23.5088 264.229 42.0563L519.265 487.225C524.121 495.705 532.966 500.909 542.523 500.909H957.991C978.897 500.909 991.876 477.491 981.25 458.941Z"
                        fill="currentColor"
                    />
                </g>
                <g filter="url(#filter1_d_21_2)">
                    <path
                        d="M387.417 500.908H33.1089C8.24637 500.908 -7.67285 472.382 3.98752 448.72L171.297 109.109C183.364 84.6199 215.651 83.7943 228.78 107.639L415.773 447.247C428.816 470.933 412.973 500.908 387.417 500.908Z"
                        fill="currentColor"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_21_2"
                        x="260.44"
                        y="0.0914917"
                        width="758.6"
                        height="526.817"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="28" dy="20" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_21_2"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_21_2"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_21_2"
                        x="0.0919189"
                        y="90.2385"
                        width="454.348"
                        height="436.67"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="28" dy="20" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_21_2"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_21_2"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export { Campsite };
