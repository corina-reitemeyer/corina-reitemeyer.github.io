import aboutData from './about.json'
import type AboutData from './aboutdata'
import AboutHero from './AboutHero'
import AboutIntroSection from './AboutIntroSection'
import ExperienceSection from './Experience'
import AboutDuoLists from './AboutDuoLists'
import ValuesSection from './ValuesSection'
import CommunitySection from './CommunitySection'

const experience = [
  {
    id: 'suitefiles',
    company: 'SuiteFiles',
    title: 'Senior Product Designer',
    dates: '2025 – 2026',
  },
  {
    id: 'dev-academy',
    company: 'Dev Academy',
    title: 'Technical Facilitator',
    dates: '2024',
  },
  {
    id: 'optimal-workshop',
    company: 'Optimal Workshop',
    title: 'Product Designer',
    dates: '2022 - 2023',
  },
  {
    id: 'moe-senior',
    company: 'Ministry of Education',
    title: 'Senior UX/UI Designer',
    dates: '2021 - 2022',
  },
  {
    id: 'moe-mid',
    company: 'Ministry of Education',
    title: 'UX/UI Designer',
    dates: '2019 - 2021',
  },
  {
    id: 'frankie-ai',
    company: 'Frankie AI',
    title: 'Web Designer',
    dates: '2018 - 2019',
  },
  {
    id: 'blackeye-vr',
    company: 'Blackeye VR',
    title: 'Digital Product Designer',
    dates: '2018',
  },
  {
    id: 'umajin',
    company: 'Umajin',
    title: 'Mobile Creative Designer',
    dates: '2016 - 2017',
  },
]

export default function About() {
  const data: AboutData = aboutData

  return (
    <>
      <AboutHero />
      <AboutIntroSection />
      <ExperienceSection items={experience} />
      <AboutDuoLists />
      <ValuesSection values={data.values} />
      <CommunitySection />
    </>
  )
}
