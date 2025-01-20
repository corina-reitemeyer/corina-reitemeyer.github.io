import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import IdeationSection from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import MobileScreensShowcase from '../components/casestudy/MobileShowCase'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrinciplesSection from '../components/casestudy/Principles'
import TabbedImageViewer from '../components/casestudy/TabbedImageViewer'
import ThreeMobile from '../components/casestudy/ThreeMobile'
import UserflowsSection from '../components/casestudy/UserFlowSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const Ritmo = () => {
  return (
    <div>
      <Hero project={undefined} />
      <ThreeMobile screens={[]} />
      <DiscoverySection
        subtitle={''}
        title={''}
        description={''}
        imageSrc={''}
        imageAlt={''}
      />
      <TabbedImageViewer images={[]} />
      <PrimaryUsersSection
        subtitle={''}
        title={''}
        description={''}
        users={[]}
      />
      <InsightsSection
        subtitle={''}
        title={''}
        description={''}
        insights={[]}
      />
      <IdeationSection title={''} description={''} ideas={[]} />
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
      <MobileScreensShowcase title={''} description={''} screens={[]} />
      <LessonsLearnedSection title={''} lessons={[]} />
    </div>
  )
}

export default Ritmo
