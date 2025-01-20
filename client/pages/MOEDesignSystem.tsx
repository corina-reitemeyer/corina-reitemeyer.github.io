import AchievementsSection from '../components/casestudy/Achievements'
import BackgroundSection from '../components/casestudy/Background'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import IdeationSection from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import OverlappingImagesSection from '../components/casestudy/OverlappingImagesSection'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import Principles from '../components/casestudy/Principles'
import TwoRowsImagesSection from '../components/casestudy/TwoRowsImagesSection'
import UserflowsSection from '../components/casestudy/UserFlowSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const MOEDesignSystem = () => {
  return (
    <div>
      <Hero project={undefined} />
      <OverlappingImagesSection images={[]} />
      <DiscoverySection
        subtitle={''}
        title={''}
        description={''}
        imageSrc={''}
        imageAlt={''}
      />
      <BackgroundSection
        subtitle={''}
        title={''}
        date={''}
        description={''}
        imageSrc={''}
        imageAlt={''}
      />
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
      <Principles subtitle={''} title={''} principles={[]} description={''} />
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
      <TwoRowsImagesSection topRowImages={[]} bottomRowImages={[]} />
      <AchievementsSection title={''} achievements={[]} />
      <LessonsLearnedSection title={''} lessons={[]} />
    </div>
  )
}

export default MOEDesignSystem
