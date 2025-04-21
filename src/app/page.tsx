import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import FeaturedDestinations from '@/components/sections/FeaturedDestinations'
import WellnessExperiences from '@/components/sections/WellnessExperiences'
import Testimonials from '@/components/sections/Testimonials'
import CtaSection from '@/components/sections/CtaSection'
import MainLayout from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <WellnessExperiences />
      <Testimonials />
      <CtaSection />
    </MainLayout>
  )
}
