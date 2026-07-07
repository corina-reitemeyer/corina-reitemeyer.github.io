import ProjectData from '../../src/projectsdata.json'
import LXDData from '../../src/lxddata.json'
import Project from '../../models/projectdata'
import ImpactStatement from '../components/ImpactStatement'
import ProjectGrid from '../components/ProjectGrid'
import { ROUTES } from '../lib/routes'

const selectedWorks: Project[] = [
  ...(ProjectData as Project[]),
  ...(LXDData as Project[]).map((project) => ({
    ...project,
    linkPrefix: ROUTES.learningExperience,
  })),
]

export default function Landing() {
  return (
    <>
      <div className="relative flex min-h-[40vh] w-full flex-col items-start justify-center bg-[#08082a] sm:min-h-[60vh]">
        <ImpactStatement
          align="left"
          padded
          bgSvgSrc="/images/Impact-statement-bg.svg"
          greeting="Hi, I'm Corina,"
          lines={[
            ' I design products and learning experiences that are simpler, clearer, and accessible to everyone who needs them.',
          ]}
          pills={[
            { label: '8+ years experience' },
            { label: 'B2B SaaS · Government · Education' },
            {
              label: 'Based in Melbourne',
              emoji: '🇦🇺',
              emojiLabel: 'Australia',
            },
          ]}
        />
      </div>

      <ProjectGrid
        heading="Selected works"
        projects={selectedWorks}
        linkPrefix={ROUTES.digitalProduct}
      />
    </>
  )
}
