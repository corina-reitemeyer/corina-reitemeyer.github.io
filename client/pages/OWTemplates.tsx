import AchievementsSection from '../components/casestudy/Achievements'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsCompactSection from '../components/casestudy/DualLaptopsCompactSection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import OpportunitySpace from '../components/casestudy/OpportunitySpace'
import PrimaryUsers from '../components/casestudy/PrimaryUsers'
import PrinciplesSection from '../components/casestudy/PrimaryUsers'
import ResearchSection from '../components/casestudy/ResearchSection'
import UserflowsSection from '../components/casestudy/UserFlowSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const OWTemplates = () => {
  return (
    <div>
      <Hero project={undefined} />
      <DualLaptopsSection laptops={[]} />
      <DiscoverySection
        subtitle={''}
        title={''}
        description={''}
        imageSrc={''}
        imageAlt={''}
      />
      <PrimaryUsers subtitle={''} title={''} description={''} users={[]} />
      <InsightsSection
        subtitle={''}
        title={''}
        description={''}
        insights={[]}
      />
      <OpportunitySpace subtitle={''} title={''} description={''} kpis={[]} />
      <PrinciplesSection
        subtitle={''}
        title={''}
        principles={[]}
        description={''}
      />
      <CompetitiveAnalysisSection
        subtitle={''}
        title={''}
        description={''}
        images={[]}
      />
      <UserflowsSection
        subtitle={''}
        title={''}
        description={''}
        userflows={[]}
      />
      <WireframesSection
        subtitle={''}
        title={''}
        description={''}
        images={[]}
      />
      <DualLaptopsCompactSection laptops={[]} />
      <ResearchSection
        title={''}
        description={''}
        result={''}
        imageSrc={''}
        imageAlt={''}
      />
      <PrinciplesSection
        subtitle={''}
        title={''}
        principles={[]}
        description={''}
      />
      <AchievementsSection title={''} achievements={[]} />
      <LessonsLearnedSection title={''} lessons={[]} />
    </div>
  )
}

export default OWTemplates
