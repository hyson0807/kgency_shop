import HeroSection from './HeroSection'
import FreeResources from './FreeResources'
import PremiumTeaser from './PremiumTeaser'
import SuccessStories from './SuccessStories'

export default function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FreeResources />
      <SuccessStories />
      <PremiumTeaser />
    </div>
  )
}