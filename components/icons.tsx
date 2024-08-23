import { RefAttributes, SVGProps } from "react";

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export type IconProps = ComponentAttributes & {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
};

const defaultProps: IconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

const Icons = {
    Campsite: (props: SVGProps<SVGSVGElement>) => (
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
    ),
    Nord: (props: SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="currentColor"
            strokeWidth="0"
        >
            <path
                d="M32 28H22L8 3.5H4V24.5L8 24.5703L13.04 14.9103L14.96 18.4103L10 28H0V0H10L24.16 24.5H28V3.5H24L19.04 13.0903L17.04 9.66L22 0H32V28Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default Icons;