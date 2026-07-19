import ProjectData from '../../src/projectsdata.json'
import Project from '../../models/projectdata'
import ImpactStatement, {
  ImpactKeyword,
} from '../components/ImpactStatement'
import ProjectGrid from '../components/ProjectGrid'
import { ROUTES } from '../lib/routes'

export default function Landing() {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-start justify-center bg-ink sm:min-h-[calc(100vh-156px)]">
        <ImpactStatement
          align="left"
          padded
          lines={[
            <>
              Senior Product Designer growing into Design Engineering, with
              the{' '}
              <ImpactKeyword
                id="specialisations"
                color="primary"
                fact="AI, design systems, and accessibility — the three areas of deep specialisation."
              >
                specialisations
              </ImpactKeyword>{' '}
              and{' '}
              <ImpactKeyword
                id="technical-range"
                color="secondary"
                fact="Front-end fluency (HTML, CSS, React, TypeScript) plus tools like Figma, Cursor, and Claude Code — bridging design and code rather than handing off at the border."
              >
                technical range
              </ImpactKeyword>{' '}
              to build{' '}
              <ImpactKeyword
                id="accessible"
                color="primary"
                fact="Practical design experience applying WCAG 2.1 whilst working in NZ Government."
              >
                accessible
              </ImpactKeyword>{' '}
              products for{' '}
              <ImpactKeyword
                id="meaningful-work"
                color="secondary"
                fact="Drawn to impact sectors doing social good — health, education, and similar."
              >
                meaningful work
              </ImpactKeyword>
              .
            </>,
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
