import CaseStudyNavy from '../components/casestudy/Hero'
import CaseStudyVideo from '../components/casestudy/CaseStudyVideo'
import ChallengeSection from '../components/casestudy/Challenge'
import ApproachSection from '../components/casestudy/ApproachSection'
import AchievementsSection from '../components/casestudy/Achievements'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import ImageStrip from '../components/casestudy/ImageStrip'
import Takeaways from '../components/casestudy/Takeaways'
import PullQuote from '../components/casestudy/PullQuote'
import PersonaCard from '../components/casestudy/PersonaCard'
import ProcessFramework from '../components/casestudy/ProcessFramework'

export default function BuildingAdaptiveTeams() {
  return (
    <>
      {/* 1. Hero */}
      <CaseStudyNavy
        intro="A microlearning course for team leads navigating change, built on the idea that the conditions matter as much as the content."
        company="Concept"
        project="Building Adaptive Teams - It will click eventually"
        imageSrc="/images/elearning/final-work/building-adaptive-teams-hero.webp"
        imageAlt="Building Adaptive Teams, course opening screen"
        disclaimer="Disclosure: the university, the people, and the numbers in this case study are invented for this concept project."
        overview={[
          "This is a fictional project, and the point of it is to demonstrate how I'd approach an Instructional Design project end to end.",
          "The idea came from a conversation with a friend about the best learning and development we'd each experienced in a role. Both answers came back to the same thing: a team lead who gave us time, space, and the safety to try things without worrying how mistakes would reflect on us. I'm not a team lead and I've never managed one, but I know what it feels like when the conditions are right, and when they aren't. That's what shaped the learner's perspective in this course, and what I wanted Carl to understand by the end of it. The result: a six-lesson microlearning course, the first piece of a three-part upskilling strategy to help team leads create the conditions for people to adopt a new tool safely, at their own pace.",
        ]}
        involvement="End to end: discovery, instructional design, visual design, development"
        meta={[
          { label: 'Timeline', value: '3 weeks' },
          {
            label: 'Tools',
            value:
              'Rise 360 · Storyline 360 · ElevenLabs · Figma · FigJam · MoodleCloud · ChatGPT · Claude · OpenPeeps Illustrations · Google Docs · Google Slides',
          },
          { label: 'Sector', value: 'Education' },
          { label: 'Type', value: 'Concept project' },
        ]}
      />

      {/* 2. Video walkthrough */}
      <CaseStudyVideo
        src="/files/video/elearning-course-walkthrough.mov"
        title="Course Walkthrough"
        caption="A walkthrough of the full six-lesson course, built in Articulate Rise."
        cta={{
          label: 'Experience the live course',
          href: '/courses/building-adaptive-teams/index.html',
          external: true,
        }}
      />

      {/* 3. Course screenshots */}
      <ImageStrip
        images={[
          {
            id: 'bat-storyline-activity',
            src: '/images/elearning/final-work/storyline-activity-screens.webp',
            alt: 'Storyline branching activity: Carl choosing how to respond in a follow-up conversation, with three response options',
            caption:
              'The Storyline branching activity. The learner watches a dialog between Carl and Jamie, and at certain points chooses dialog choices for Carl.',
          },
          {
            id: 'bat-lesson-two-call',
            src: '/images/elearning/final-work/course-lesson1.gif',
            alt: 'Lesson 2, "Twenty Minutes," showing an incoming call prompt on screen',
            caption:
              'Lesson 2, "Twenty Minutes." An interactive call prompt puts the learner in the moment before the conversation even starts.',
            frame: 'browser',
          },
        ]}
      />

      {/* 4. Approach */}
      <ApproachSection
        title="Approach"
        items={[
          {
            id: 'process-overview',
            body: [
              "My background is in product design, with teaching as a secondary skill set. The instinct I bring to learning design is the same one I bring to any design problem: understand what's actually going on before you start designing a solution. That means understanding the context, but it also means checking that we're solving the root cause, not a symptom that gets mistaken for the problem.",
              "Because this project is fictional, my approach leans more heavily on ADDIE than a real one would. In practice, working closely with subject matter experts and stakeholders, I'd expect it to lean more towards SAM, or some hybrid of the two. Either way, what matters to me is making sure the right problem gets solved, while still operating within an agreed scope.",
            ],
          },
        ]}
      />

      <section className="bg-[#08082a] pb-16 sm:pb-24">
        <div className="relative left-1/2 w-screen max-w-6xl -translate-x-1/2 px-6 lg:px-0">
          <ProcessFramework
            caption="An ADDIE-informed loop, stretched by UX discovery practice."
            loopLabel="Evaluate feeds back into Discovery. The loop runs continuously, not just once."
            steps={[
              {
                id: 'perceived-problem',
                label: 'Perceived problem',
                description: 'What the client thinks they need',
              },
              {
                id: 'discovery',
                groupLabel: 'Analysis',
                label: 'Discovery',
                description: 'Validate or reframe the brief',
              },
              {
                id: 'needs-analysis',
                label: 'Needs analysis',
                description: 'Gap between now and desired',
              },
              {
                id: 'learner-analysis',
                label: 'Learner analysis',
                description: 'Persona, context, barriers',
              },
              {
                id: 'insight',
                groupLabel: 'Insight',
                label: 'Insight',
                description: 'Validate the actual problem',
              },
              {
                id: 'design-development',
                groupLabel: 'Design & delivery, SAM/iterations',
                label: 'Design and development',
                description: 'Objectives, storyboard, build',
              },
              {
                id: 'implementation',
                label: 'Implementation',
                description: 'Deliver to learners',
              },
              {
                id: 'evaluate',
                groupLabel: 'Evaluate',
                label: 'Evaluate',
                description: 'Measure, feed insights back',
              },
            ]}
          />
        </div>
      </section>

      {/* 5. The brief */}
      <ChallengeSection
        challenges={[
          {
            id: 'the-brief',
            heading: 'The brief',
            body: [
              'For this project, I invented a client: Priya Mehta, Director of Digital Transformation at a fictional Waratah University. She came in with a clear ask, and some data to back it up.',
              "Waratah is a mid-sized Australian university, around 18,000 students across five faculties. Canvas replaced a Blackboard instance that had been limping along since 2015, and the $2.3 million migration was Priya's project. She'd pushed hard for Canvas over two other shortlisted platforms, so a rollout that landed badly reflected on her, not just IT.",
              "Semester 2 was six weeks out when we spoke, and the Vice-Chancellor's office had started asking questions. Whatever training existed needed to work, and it needed to work fast.",
            ],
          },
        ]}
      />

      <section className="bg-[#08082a] px-6 pb-16 sm:pb-24 lg:px-0">
        <div className="mx-auto max-w-2xl">
          <PullQuote
            quote="We've just finished a $2.3 million rollout of Canvas. It's June now and adoption is patchy. Some faculties are using it well. Others are basically still emailing students PDFs. We need a training program that actually gets our academic staff using Canvas properly."
            attribution="Priya Mehta"
            attributionRole="Director of Digital Transformation (invented for this brief)"
          />
        </div>
      </section>

      {/* 6. Key stats */}
      <section className="bg-[#08082a] px-6 lg:px-0">
        <div className="mx-auto max-w-2xl">
          <p className="mb-20 text-left text-lg leading-relaxed text-slate-300 antialiased">
            Priya came to that first conversation with data already in hand.
            Three numbers set the terms for everything that followed:
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                stat: '34%',
                label:
                  'of academic staff had logged in fewer than five times since launch',
              },
              { stat: '78%', label: 'rated the February training positively' },
              { stat: '6 weeks', label: 'until Semester 2 begins' },
            ].map(({ stat, label }) => (
              <div key={stat} className="border-l-2 border-white/10 pl-6">
                <dt className="text-4xl font-bold text-white antialiased sm:text-5xl">
                  {stat}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-400">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ChallengeSection
        title=""
        challenges={[
          {
            id: 'the-brief-analysis',
            body: [
              "From the data alone, the 78/34 split was the first signal that something deeper was going on. Training satisfaction and behaviour change aren't the same metric, in Kirkpatrick's evaluation model that's Level 1 versus Level 3, and the gap between them suggested the problem wasn't that staff hadn't been trained. It was that the training hadn't changed anything.",
              "The patchiness had a shape to it too. Some faculties had picked up Canvas within weeks. Others were barely using it at all. Priya's assumption was that the training resources were the issue: wrong format, wrong quality, not enough of them.",
              "That might have been part of it. But it didn't explain why the gap between faculties was so pronounced, or why staff who'd rated the training positively were still not using the tool.",
              'Before designing anything, I needed to understand why.',
            ],
          },
        ]}
      />

      {/* 7. Discovery */}
      <ApproachSection
        title="Discovery"
        items={[
          {
            id: 'discovery-approach',
            body: [
              "I drew on how I'd actually handle this situation from experience: specifically, the stakeholder management challenge of proposing discovery work within an already tight timeline.",
              "In practice, a formal research phase is rarely in scope on a six-week brief. Proposing one risks sounding like a delay before you've even started. The move is to reframe it: light context gathering, folded into the timeline rather than added on top of it. A handful of short conversations with team leads, positioned as due diligence rather than a research sprint.",
              'That framing matters. It makes the same work easier to say yes to.',
              'The interview guide was structured around three zones:',
            ],
            list: [
              'Their world, role, week, pressures, what good looks like.',
              'Their workflow, how they currently do the things Canvas is supposed to help with.',
              "The tool, what happened, what helped, what didn't, what's missing.",
            ],
            images: [
              {
                id: 'bat-interview-guide',
                src: '/images/elearning/process/interview-guide.png',
                alt: 'Discovery interview guide showing the opening script, three question zones, and closing questions',
                caption:
                  'Interview guide: three zones structured to surface the conditions behind adoption.',
              },
            ],
            links: [
              {
                label: 'View full interview guide',
                href: 'https://docs.google.com/document/d/1Ob2MiiCVruESEkMHlU9-ACbzQaZViDO2RayMAS5AiFQ/edit?usp=sharing',
              },
            ],
          },
        ]}
      />

      <AchievementsSection
        title="What those conversations could surface"
        intro="Conversations like these tend to split into two clear patterns: teams where adoption stuck, and teams where it didn't. Here's the kind of thing each side could plausibly say."
        achievements={[
          {
            id: 'discovery-low-adoption',
            title: 'Low-adoption teams',
            description:
              "Staff weren't resistant to technology, they were exhausted. The February training tried to cram every Canvas feature into one day. By hour three, most people had checked out. Nobody retained enough to feel confident logging in and trying it on their own.",
          },
          {
            id: 'discovery-high-adoption',
            title: 'High-adoption teams',
            description:
              "Two things showed up consistently: a team lead who'd engaged with Canvas early and turned into an informal champion, and dedicated time carved out in the team's schedule for practice and experimentation.",
          },
        ]}
      />

      {/* 8. The dual problem */}
      <AchievementsSection
        title="The dual problem"
        variant="cards"
        className="pb-8 sm:pb-12"
        achievements={[
          {
            id: 'problem-design',
            title: 'Problem 1: A design failure',
            description:
              "The training was built around the tool, not the learner. Feature-first, with no context. Staff couldn't connect Canvas to the work they were already doing.",
          },
          {
            id: 'problem-environment',
            title: 'Problem 2: An environment failure',
            description:
              "Low-adoption teams didn't have psychological safety, time, or a culture that made it okay not to know something yet. No amount of better training fixes that if the conditions around it don't change.",
          },
        ]}
      />

      <section className="bg-[#08082a] px-6 pb-16 sm:pb-24 lg:px-0">
        <div className="mx-auto max-w-2xl space-y-4">
          <p className="text-lg leading-relaxed text-slate-300 antialiased">
            {
              "This course leans into Problem 2. Priya's original ask was really aimed at Problem 1: better training content, delivered differently. But discovery pointed at something a training redesign alone wouldn't fix: the conditions team leads were operating in."
            }
          </p>
          <p className="text-lg leading-relaxed text-slate-300 antialiased">
            {
              "There's also a practical asymmetry between the two problems. If someone needs to know how to post an announcement in Canvas, that's a five-minute search away: help docs, videos, forums. But no generic resource can teach a team lead how to build psychological safety in their specific team, with its own history and dynamics. That has to be shaped by the organisation's own context. That's where instructional design adds value instead of duplicating what the internet already does well."
            }
          </p>
          <p className="text-lg leading-relaxed text-slate-300 antialiased">
            {
              "Both problems are real, and solving only one is a compromise. Six weeks doesn't stretch to both. This course is the first piece of a three-part upskilling strategy, built to address the environment failure. A second piece, sharper on the Canvas specifics, would follow it."
            }
          </p>
        </div>
      </section>

      {/* 9. The learner */}
      <ApproachSection
        title="The learner"
        items={[
          {
            id: 'learner-intro',
            body: [
              'Before designing anything, I needed to know who I was actually designing for. Not a generic team lead. A specific person, with a specific history and specific reasons to be wary of yet another new tool.',
              "In a real project, that picture would come from conversations with team leads and subject matter experts. Since this one's fictional, it's loosely inspired by team leads I've met in past roles, not built from nothing, but not primary research either.",
            ],
          },
        ]}
      />

      <section className="bg-[#08082a] px-6 pb-16 sm:pb-24 lg:px-0">
        <div className="mx-auto max-w-2xl">
          <PersonaCard
            name="Jordan Lee, 46"
            title="Academic Program Director"
            context="Manages 8 lecturers and tutors in an undergraduate health sciences program."
            avatarSrc="/images/elearning/process/jordan-avatar.webp"
            avatarAlt="Illustrated avatar of Jordan Lee"
            facts={[
              {
                label: 'Role',
                value:
                  '20 years in academia. Promoted into the role when the last director left suddenly, and said yes because nobody else would. Still thinks of themselves as an academic first, not a manager.',
              },
              {
                label: 'Relationship with tech',
                value:
                  'Uses the LMS daily, but only the features learned five years ago. Emails students directly because "it\'s faster."',
              },
              {
                label: 'A bad day',
                value:
                  "A student complaint escalated to the Dean, two tutors haven't submitted grades, and a reminder about the new LMS sits among seventeen unread emails.",
              },
              {
                label: 'What they care about',
                value:
                  'Academic integrity, and their students actually learning. Protective of a program built over two decades.',
              },
              {
                label: 'Relationship with learning',
                value:
                  'Teaches for a living but resists being taught. Tolerates mandatory PD, sits in the back, checks email throughout.',
              },
              {
                label: 'Secret fear',
                value:
                  'Looking incompetent in front of their own tutors, or having to ask someone younger for help.',
              },
            ]}
            quote="I have a PhD. I don't need a three-hour workshop to learn how to post an announcement. My students are fine. Why is this suddenly urgent?"
          />
        </div>
      </section>

      {/* 10. Design decisions */}
      <ApproachSection
        title="Design decisions"
        items={[
          {
            id: 'design-planning',
            heading: 'Planning the experience',
            body: [
              'Before opening either tool, the course was mapped out in full: a course outline to establish the lesson structure and logic, a storyboard to plan the story beat by beat, and an interaction map to work out where the learner needed to do something rather than just read.',
              'That planning phase is where most of the real design decisions happen. The tools come later.',
            ],
            images: [
              {
                id: 'bat-course-map',
                src: '/images/elearning/process/course-outline-figjam.png',
                alt: 'FigJam course outline showing all six lessons and the embedded Storyline activity in Lesson 6',
                caption:
                  'Course outline in FigJam: six lessons, with the embedded Storyline activity mapped out underneath Lesson 6.',
              },
            ],
            links: [
              {
                label: 'View course outline',
                href: 'https://www.figma.com/board/G1EEEgnIADUHZ6lOxyb1q6/Course-outline---It-will-click-eventually?node-id=0-1&t=cUSslwPYzLAiaNa0-1',
              },
              {
                label: 'View storyboard / design document',
                href: 'https://docs.google.com/document/d/1VJdpYupCULWPGFxeJlJ2ryoJSUhykHRGOya4knXGZnE/edit?usp=sharing',
              },
            ],
          },
          {
            id: 'design-microlearning',
            heading: 'Microlearning format',
            body: [
              'Six lessons, five to eight minutes each. Under 40 minutes for the whole course.',
              'Two reasons for the format. First, the target learner is time-poor, and a full day of training is exactly what caused the original problem. Second, the format practises what it teaches. A course about building low-barrier, incremental habits should itself be a low-barrier, incremental experience.',
            ],
          },
          {
            id: 'design-tools',
            heading: 'Rise for content, Storyline for interaction',
            body: [
              'The original plan was to build the whole course in Storyline. It made sense on paper: more control over every screen, richer interactions, full custom design.',
              "The reason I moved away from it was responsiveness. A time-poor team lead should be able to pick up the course between meetings on their phone as easily as at their desk. Rise handles that out of the box. Storyline requires significantly more work to get there, and on a six-week timeline that work wasn't justifiable.",
              "The tradeoff is that Rise has real limitations with complex interactions. It can do simple branching, but not the kind of consequence-driven scenario I wanted for Lesson 6, where the learner actively steers a conversation and sees what happens as a result. That's where Storyline came back in, as a focused embed rather than the primary tool.",
              'Better to use each tool for what it actually does well.',
            ],
          },
        ]}
      />

      {/* 11. Learning theory */}
      <KeyOutcomes
        title="Learning theory"
        intro={[
          'These frameworks were not consulted after the course was built to justify decisions already made. They shaped the design from the start, which learning sequence to use, how to structure the reflection prompts, why the assessment works the way it does, and why the course opens with a story instead of an objective.',
          'What follows is a short account of each one and where it shows up in the course.',
        ]}
        columns={2}
        outcomes={[
          {
            id: 'theory-vicarious',
            iconSrc: '/icons/vicarious-learning-icon.svg',
            iconEmoji: '🎭',
            eyebrow: 'Bandura',
            title: 'Vicarious learning',
            description:
              'Jordan learns by watching Carl make mistakes safely, before being asked to navigate similar situations themselves.',
          },
          {
            id: 'theory-psych-safety',
            iconSrc: '/icons/psychological-safety-icon.svg',
            iconEmoji: '🛡️',
            eyebrow: 'Edmondson',
            title: 'Psychological safety',
            description:
              'The course models the conditions it teaches. No shame for wrong answers, no judgment in reflection prompts, permission to not know something yet.',
          },
          {
            id: 'theory-transformative',
            iconSrc: '/icons/transformative-learning-icon.svg',
            iconEmoji: '🔄',
            eyebrow: 'Mezirow',
            title: 'Transformative learning',
            description:
              "The goal isn't knowledge, it's a shift in perspective: seeing tool adoption as a conditions problem instead of a training problem.",
          },
          {
            id: 'theory-cognitive-load',
            iconSrc: '/icons/cognitive-load-icon.svg',
            iconEmoji: '🧠',
            eyebrow: 'Sweller',
            title: 'Cognitive load management',
            description:
              'Microlearning format, one idea per screen, chunked content, and consistent navigation reduce extraneous load so Jordan can focus on the learning itself.',
          },
        ]}
      />

      {/* 12. Accessibility */}
      <ApproachSection
        title="Accessibility"
        items={[
          {
            id: 'accessibility-overview',
            body: [
              'Accessibility was designed in from the start, not bolted on afterward. WCAG 2.1 AA was the baseline throughout.',
              'Visual: enough colour contrast, alt text on every character illustration, nothing conveyed by colour alone.',
              'Auditory: closed captions on all Storyline audio. The course never relies on sound to carry information.',
              "Motor: keyboard navigable throughout, click targets sized for mouse and touch, nothing that's time-pressured.",
              'Cognitive: plain language, content chunked into small pieces, consistent navigation so the learner always knows where they are.',
            ],
            images: [
              {
                id: 'bat-accessibility-checker',
                src: '/images/elearning/process/accessibility-checker-storyline.png',
                alt: 'Storyline Accessibility Checker panel showing 80 Level A issues resolved down to zero, using a mix of AI-assisted and manual fixes',
                caption:
                  "Storyline's built-in Accessibility Checker: 80 Level A issues flagged, worked through with a mix of AI-assisted and manual fixes, down to zero outstanding Level AA and AAA issues.",
              },
            ],
          },
        ]}
      />

      {/* 13. AI workflow */}
      <ApproachSection
        title="AI in this project"
        items={[
          {
            id: 'ai-overview',
            body: [
              'AI tools were part of this project on purpose, not to replace design judgment, but to speed up production and try out ideas faster.',
            ],
          },
          {
            id: 'ai-illustration-variations',
            heading: 'Creating illustration variations',
            body: [
              "Carl and Jamie needed a real range across the course: different facial expressions, body language, and angles for every scene, not one pose reused throughout. OpenPeeps isn't an AI tool, it's an open-source illustration library by Pablo Stanley, and it gave me the foundation: hand-drawn components I could mix and match to land on a look I was happy with.",
              'Once that foundation was set, ChatGPT helped generate the variations on top of it, different expressions and poses for Carl and Jamie scene by scene, without hand-drawing each one from scratch.',
            ],
            images: [
              {
                id: 'bat-chatgpt-variation',
                src: '/images/elearning/process/chatgpt-images.png',
                alt: 'ChatGPT prompt asking for a version of Carl looking apologetic, with the generated illustration shown above it',
                caption:
                  'Asking ChatGPT for a new expression for Carl, once the OpenPeeps-based look was locked in.',
              },
            ],
          },
          {
            id: 'ai-narration',
            heading: 'Giving the story a voice',
            body: [
              'ElevenLabs gave the Storyline activity a narrated, story-like quality, so the learner connects with Carl and Jamie as characters instead of just reading blocks of dialogue on screen.',
            ],
            images: [
              {
                id: 'bat-elevenlabs',
                src: '/images/elearning/process/elevenlabs.png',
                alt: "ElevenLabs Text to Speech interface generating narration for one of Carl's lines",
                caption:
                  'Generating narration in ElevenLabs for the Lesson 6 branching activity.',
              },
            ],
          },
          {
            id: 'ai-mentor',
            heading: 'A mentor in the process',
            body: [
              'Claude helped with the fictional brief, refining content, and troubleshooting throughout. Less a tool I ran prompts through and more a senior instructional designer mentoring me as I worked through the project.',
            ],
          },
        ]}
      />

      {/* 14. Bonus */}
      <ApproachSection
        title="Bonus"
        items={[
          {
            id: 'bonus-moodle',
            heading: 'Deployed to MoodleCloud',
            body: [
              "Unlike Carl and Jamie, I wasn't able to get my hands on Canvas, so proving the course works as a real SCORM package meant finding a different LMS. I uploaded the same SCORM 1.2 export to a MoodleCloud site instead, to confirm it launches, tracks, and behaves the way it would inside any real LMS, not just as a preview in Rise.",
            ],
            images: [
              {
                id: 'bat-moodle-scorm',
                src: '/images/elearning/process/moodle-cloud-scorm-upload.png',
                alt: 'MoodleCloud SCORM package page showing "It Will Click Eventually" in preview mode with a Start Course button',
                caption:
                  'The SCORM package live in MoodleCloud, previewed and ready to launch.',
              },
            ],
          },
        ]}
      />

      {/* 15. Constraints and trade-offs */}
      <AchievementsSection
        title="Constraints and trade-offs"
        achievements={[
          {
            id: 'constraint-fictional',
            title: 'Fictional concept',
            description:
              "The scenario, the organisation, and the characters are all made up. Primary research with real team leads would strengthen the persona, the problem framing, and the discovery findings considerably. The interview guide reflects how I'd actually run that phase on a real project.",
          },
          {
            id: 'constraint-solo',
            title: 'Solo practitioner',
            description:
              'No SME access and no real learner testing. Design decisions came from sector knowledge, learning design theory, and my own experience of what change fatigue looks like on a team, rather than primary data.',
          },
          {
            id: 'constraint-evaluation',
            title: 'Evaluation',
            description: [
              'Without real learners, the Evaluation phase, the "E" in ADDIE, couldn\'t actually run.',
              'If it had, it would tell us whether this course moved the needle: adoption rates, manager observation, and a 90-day confidence follow-up with team leads. That data would also answer a question the brief left open, whether a companion onboarding piece for team members is actually needed, or whether shifting the team lead conditions is enough on its own.',
            ],
          },
          {
            id: 'constraint-tools',
            title: 'Tools',
            description:
              'The course was built during an Articulate 360 and MoodleCloud trial period. The GitHub Pages deployment ensures the live link remains accessible independently of any subscription.',
          },
        ]}
      />

      {/* 16. Takeaways */}
      <Takeaways
        paragraphs={[
          "Coming up with a story that actually lands was harder than I expected. The Carl and Jamie scenario went through several versions before it felt genuinely relatable rather than constructed. The challenge is finding the right level of specificity: too generic and it feels like a training video cliché, too niche and it stops being anyone's story. The gradebook detail, Jamie not raising it a second time, Carl's internal monologue about the next meeting: those small specifics are what make it feel like something that could actually happen, rather than something designed to illustrate a point.",
          "The other learning curve was embedding theory into the flow without it showing. It's straightforward enough to know that Mezirow says perspective shifts need emotional engagement before cognitive instruction. It's harder to actually build a lesson sequence where that principle is doing the work invisibly, where the learner feels the logic of the order without being told why it's structured that way. That gap between knowing a framework and designing from it is where most of the real ID thinking happened.",
        ]}
      />
    </>
  )
}
