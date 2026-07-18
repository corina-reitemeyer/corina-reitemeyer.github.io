import ProjectData from '../../src/projectsdata.json'
import Project from '../../models/projectdata'
import ImpactStatement from '../components/ImpactStatement'
import ProjectGrid from '../components/ProjectGrid'
import { ROUTES } from '../lib/routes'

export default function Landing() {
  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-start bg-[#08082a] pb-10 sm:min-h-[60vh] sm:justify-center sm:pb-0">
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
        projects={ProjectData as Project[]}
        linkPrefix={ROUTES.digitalProduct}
      />
    </>
  )
}
