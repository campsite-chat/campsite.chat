"use client";

import { useTheme } from "next-themes";
import Particles from "./ui/particles";

export default function ParticleBackground() {
	const { theme } = useTheme();
	return (
		<>
			<Particles
				className="absolute inset-0 -z-10"
				quantity={125}
				ease={70}
				size={theme === "dark" ? 0.05 : 0.10}
				staticity={40}
				color={theme === "dark" ? "#ffffff" : "#000000"}
			/>
		</>
	)
}