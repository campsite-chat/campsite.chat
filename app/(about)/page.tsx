import { SphereMask } from "~/components/ui/sphere-mask"
import HeroSection from "./hero-section"
import TechStackSection from "./tech-stack-section"

export default async function Page() {
   return (
      <>
         <HeroSection />
         <TechStackSection />
         <SphereMask />
      </>
   )
}
