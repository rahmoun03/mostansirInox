import { ContactCTASection } from '../components/sections/ContactCTASection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <ContactCTASection />
    </main>
  )
}
