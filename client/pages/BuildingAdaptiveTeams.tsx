import CaseStudyNavy from '../components/casestudy/Hero'
import CaseStudyVideo from '../components/casestudy/CaseStudyVideo'
import ChallengeSection from '../components/casestudy/Challenge'
import ApproachSection from '../components/casestudy/ApproachSection'
import AchievementsSection from '../components/casestudy/Achievements'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import ImageStrip from '../components/casestudy/ImageStrip'
import Takeaways from '../components/casestudy/Takeaways'
import PullQuote from '../components/casestudy/PullQuote'

export default function BuildingAdaptiveTeams() {
  return (
    <>
      {/* 1. Hero */}
      <CaseStudyNavy
        intro="A microlearning course for team leads navigating change, built on the idea that the conditions matter as much as the content."
        company="Concept"
        project="It will click eventually"
        imageSrc="/images/lxd/bat-hero.webp"
        imageAlt="Building Adaptive Teams, course opening screen"
        disclaimer="Quick disclosure: the university, the people, and the numbers in this case study are invented for this concept project. The problems they're built on are real, pulled from change management and LMS adoption research."
        overview="This is a speculative project. I made up the brief myself, but grounded it in something that plays out across higher ed all the time: a university finishes a big LMS migration, and months later a third of staff have barely logged in, even though most of them said the initial training was good. This six-lesson microlearning course is the first piece of a three-part upskilling strategy I designed to help team leads create the conditions for people to adopt a new tool safely, at their own pace."
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
        cta={{ label: 'Experience the live course', href: '#', external: true }}
      />

      {/* 3. Course screenshots */}
      <ImageStrip
        images={[
          {
            id: 'bat-rise-sidebar',
            src: '/images/lxd/bat-rise-sidebar.webp',
            alt: 'Rise course screenshot with the sidebar open, showing all six lesson titles',
            caption:
              'The full course structure in Rise. Six lessons, one idea at a time.',
          },
          {
            id: 'bat-storyline-scenario',
            src: '/images/lxd/bat-storyline-scenario.webp',
            alt: 'Storyline Pick One interaction, the branching scenario in Lesson 6',
            caption:
              'The Pick One interaction in Lesson 6. Consequence feedback, no right or wrong answers.',
          },
        ]}
      />

      {/* 4. The short version */}
      <section className="bg-[#08082a] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-0">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#CBEDE8]/60">
            The short version, for the time poor
          </p>

          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                Waratah University had just finished a $2.3 million LMS
                migration, moving from Blackboard to Canvas. Three days of
                all-staff training. A how-to video library on the intranet. By
                June, 34% of academic staff had logged in fewer than five times.
              </p>
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                The ask was simple: build a training program that actually gets
                staff using Canvas.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                A post-training survey had 78% of staff rating the February
                training positively. But adoption stayed low. Training
                satisfaction and behaviour change are two different things, and
                nobody had asked why the gap was there.
              </p>
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                {
                  "Discovery turned up two problems instead of one. The original training was built around the tool, not the learner. The bigger issue was that team leads didn't feel safe enough to champion a tool they hadn't gotten comfortable with themselves."
                }
              </p>
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                More Canvas tutorials were never going to fix that.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                The result is a six-lesson narrative microlearning course that
                follows Carla, a team lead, and Jamie, one of her team members.
                It shows what happens when a well-meaning manager mistakes
                compliance for real support.
              </p>
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                The course uses story, reflection, and a branching Storyline
                interaction to shift team leads from thinking about the tool to
                thinking about the conditions around it.
              </p>
              <p className="text-lg leading-relaxed text-slate-300 antialiased">
                Built in Articulate Rise 360 with an embedded Storyline 360
                activity. Deployed to MoodleCloud as a SCORM 1.2 package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. My process */}
      <ApproachSection
        title="My process"
        items={[
          {
            id: 'process-overview',
            body: [
              "My background is in product design and UX. The instinct I bring to learning design is the same one I bring to any design problem: understand what's actually going on before you start designing a solution. That sounds obvious. In practice, it's the step everyone wants to skip.",
              "This project follows an ADDIE-informed process, stretched a bit further by the UX discovery habits I brought over from product work. It's iterative where the work needs it, and linear where the constraints don't leave room for anything else.",
            ],
            images: [
              {
                id: 'bat-process-framework',
                src: '/images/lxd/bat-process-framework.webp',
                alt: 'ID process framework diagram showing discovery, design, development, and evaluation phases',
                caption:
                  'My process framework: an ADDIE-informed loop, stretched by UX discovery practice.',
              },
            ],
          },
        ]}
      />

      {/* 6. The brief */}
      <ChallengeSection
        challenges={[
          {
            id: 'the-brief',
            heading: 'The brief',
            body: [
              'For this project, I invented a client: Priya Mehta, Director of Digital Transformation at a fictional Waratah University. She came in with a clear ask, and some data to back it up.',
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
            tag="Dialogue, not a transcript"
          />
        </div>
      </section>

      <ChallengeSection
        title=""
        challenges={[
          {
            id: 'the-brief-analysis',
            body: [
              'The 78/34 split was the first real signal. Training satisfaction and behaviour change aren\'t the same metric, that\'s Kirkpatrick Level 1 versus Level 3. The data pointed at something other than "staff weren\'t trained." It pointed at "the training didn\'t change anything."',
              'Before I could design a solution, I needed to understand why.',
            ],
            note: "In a real project, I'd bring this observation back to the stakeholder before going any further, and get explicit buy-in to spend time on discovery before committing to a solution. On a six-week timeline, that conversation would need to happen in the first 48 hours.",
          },
        ]}
      />

      {/* 7. Key stats */}
      <section className="bg-[#08082a] pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-0">
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

      {/* 8. Discovery */}
      <ApproachSection
        title="Discovery"
        items={[
          {
            id: 'discovery-approach',
            heading: 'The approach',
            body: [
              'Instead of jumping straight to design, I built in a short discovery phase: four interviews across one week, meant to check the actual problem before committing to a solution.',
              "There's no real university behind this project, so there were no real interviews either. The interview guide is real, built the way I'd actually run this phase with real team leads. What follows it (the findings) is a plausible picture I put together from sector research, workplace-adoption studies, and my own experience of what change fatigue looks like on a team. None of it is a transcript.",
              "The interview guide itself was structured around three zones: Zone 1 (Their world), role, week, pressures, what good looks like. Zone 2 (Their workflow), how they currently do the things Canvas is supposed to help with. Zone 3 (The tool), what happened, what helped, what didn't.",
            ],
            images: [
              {
                id: 'bat-interview-guide',
                src: '/images/lxd/bat-interview-guide.webp',
                alt: 'Interview guide showing three-zone question structure',
                caption:
                  'Interview guide: three zones structured to surface the conditions behind adoption.',
              },
            ],
            links: [{ label: 'View full interview guide', href: '#' }],
          },
          {
            id: 'discovery-low-adoption',
            heading: 'Low-adoption teams',
            body: [
              "The picture that emerged: staff weren't resistant to technology, they were exhausted. The February training tried to cram every Canvas feature into one day. By hour three, most people had checked out. Nobody retained enough to feel confident logging in and trying it on their own.",
            ],
          },
        ]}
      />

      <section className="bg-[#08082a] px-6 pb-16 sm:pb-24 lg:px-0">
        <div className="mx-auto max-w-2xl">
          <PullQuote
            quote="I didn't want them to see me struggling."
            attributionRole="A composite of what comes up again and again in adoption research, not a real interview quote"
            tag="Composite, not a transcript"
          />
        </div>
      </section>

      <ApproachSection
        title=""
        items={[
          {
            id: 'discovery-high-adoption',
            heading: 'High-adoption teams',
            body: [
              "Two things showed up consistently in the pattern: a team lead who'd engaged with Canvas early and turned into an informal champion, and dedicated time carved out in the team's schedule for practice and experimentation.",
            ],
            note: "In a real project, this would be primary research with actual team leads and staff across multiple faculties, not constructed findings. The interview guide reflects how I'd actually run that phase.",
          },
        ]}
      />

      {/* 9. The dual problem */}
      {/* Visual opportunity: this section is text-only right now. A simple two-panel
          diagram (design failure vs. environment failure) would let people see the split
          instead of reading it in two paragraphs. */}
      <AchievementsSection
        title="The dual problem"
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

      {/* 10. The learner */}
      {/* Visual opportunity: Jordan's quote currently sits in body text, separate from the
          persona card image below. Placing it inside or alongside the card would make it
          read as part of the artifact rather than as narration. */}
      <ApproachSection
        title="The learner"
        items={[
          {
            id: 'learner-intro',
            body: [
              'Before designing anything, I needed to know who I was actually designing for. Not a generic team lead. A specific person, with a specific history and specific reasons to be wary of yet another new tool.',
            ],
          },
          {
            id: 'learner-jordan',
            heading: 'Jordan Lee, 46',
            body: [
              "Jordan didn't plan on becoming a manager. They stepped into the role when the previous director left suddenly, and said yes because nobody else would. Twenty years in, they still think of themselves as an academic first.",
              'Their relationship with the LMS is functional but stuck. They use the handful of features they learned five years ago and work around everything else. When the Canvas migration was announced, Jordan had seventeen unread emails about it and opened none of them.',
              "The real barrier isn't the tool. It's the history. Three LMS migrations in ten years. Each one promised to be better. Each one left Jordan to clean up the mess afterward.",
              "So the new tool doesn't get judged on its own merits. It gets judged against that whole history.",
              '"I have a PhD. I don\'t need a three-hour workshop to learn how to post an announcement. My students are fine. Why is this suddenly urgent?"',
            ],
            images: [
              {
                id: 'bat-jordan-persona',
                src: '/images/lxd/bat-jordan-persona.webp',
                alt: 'Jordan Lee persona card, Academic Program Director, 46, internal monologue and history visible',
                caption:
                  'Jordan Lee: designed to be human, not just a demographic.',
              },
            ],
            note: "In a real project, I'd validate this persona through interviews with real team leads, instead of building it from sector knowledge and proxy research.",
          },
        ]}
      />

      {/* 11. Design decisions */}
      <ApproachSection
        title="Design decisions"
        items={[
          {
            id: 'design-narrative',
            heading: 'Narrative over instruction',
            body: [
              "Most learning about change management tells people what to do. This course shows what happens when someone doesn't, and lets the learner work out why on their own.",
              "Carla and Jamie's story leans on vicarious learning theory, Bandura's idea that people learn well by watching someone else navigate a situation and feel the consequences, before they're asked to apply anything themselves.",
              'The story also creates some distance. Jordan can watch Carla get it wrong without feeling personally attacked. By the time the course asks Jordan to reflect on their own team, most of the emotional groundwork is already done.',
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
              "Rise handled the content-heavy narrative lessons: scrolling, readable, works fine on a phone. Storyline handled the branching interaction in Lesson 6, where the learner actually steers Carla's conversation with Jamie.",
              'The split was deliberate. Rise is good at scrolling narrative. Storyline is good at learner agency and consequence-based feedback. Better to use the right tool for each screen than force one tool to do everything.',
            ],
            images: [
              {
                id: 'bat-course-map',
                src: '/images/lxd/bat-course-map.webp',
                alt: 'FigJam course map showing six lessons and the Storyline embed point in Lesson 6',
                caption:
                  'Course architecture: six lessons in FigJam, with the Storyline embed point marked in Lesson 6.',
              },
            ],
            links: [
              { label: 'View course architecture', href: '#' },
              { label: 'View storyboard', href: '#' },
              { label: 'View design document', href: '#' },
            ],
          },
          {
            id: 'design-consequence',
            heading: 'Consequence feedback, not right or wrong',
            body: [
              'The Storyline interaction gives consequence feedback instead of marking answers correct or incorrect. Jordan sees what happens after Carla makes each choice, not a red cross or a green tick.',
              "That choice mirrors what the course is actually about. A course on psychological safety shouldn't shame learners for getting an answer wrong. The assessment has to practise what the content teaches.",
            ],
          },
          {
            id: 'design-attitude',
            heading: 'Attitude before skill',
            body: [
              "The course opens with empathy: Jordan watches Carla and Jamie's conversation play out before being asked to change anything about their own behaviour. That's grounded in Mezirow's transformative learning theory, the idea that a shift in perspective needs emotional engagement before it can take on any cognitive instruction. You can't teach someone to create psychological safety if they haven't first felt what it costs to go without it.",
            ],
          },
        ]}
      />

      {/* 12. Learning theory */}
      <KeyOutcomes
        title="Learning theory"
        columns={2}
        outcomes={[
          {
            id: 'theory-vicarious',
            iconEmoji: '🎭',
            title: 'Vicarious learning',
            description:
              'Bandura. Jordan learns by watching Carla make mistakes safely, before being asked to navigate similar situations themselves.',
          },
          {
            id: 'theory-psych-safety',
            iconEmoji: '🛡️',
            title: 'Psychological safety',
            description:
              'Edmondson. The course models the conditions it teaches. No shame for wrong answers, no judgment in reflection prompts, permission to not know something yet.',
          },
          {
            id: 'theory-transformative',
            iconEmoji: '🔄',
            title: 'Transformative learning',
            description:
              "Mezirow. The goal isn't knowledge, it's a shift in perspective: seeing tool adoption as a conditions problem instead of a training problem.",
          },
          {
            id: 'theory-cognitive-load',
            iconEmoji: '🧠',
            title: 'Cognitive load management',
            description:
              'Sweller. Microlearning format, one idea per screen, chunked content, and consistent navigation reduce extraneous load so Jordan can focus on the learning itself.',
          },
        ]}
      />

      {/* 13. Accessibility */}
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
                id: 'bat-captions',
                src: '/images/lxd/bat-captions.webp',
                alt: 'Storyline player showing the closed captions button active',
                caption:
                  'Closed captions in the Storyline player, available through the native CC button.',
              },
            ],
          },
        ]}
      />

      {/* 14. AI workflow */}
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
            id: 'ai-elevenlabs',
            heading: 'ElevenLabs',
            body: [
              "Used to generate consistent voices for Carla and Jamie across all the Storyline audio. That got me production-quality narration without booking a studio, and it's the kind of workflow that scales well for teams that need to update audio content often.",
            ],
          },
          {
            id: 'ai-chatgpt',
            heading: 'ChatGPT',
            body: [
              'Used early on, mostly for drafting: rough interview question variations, first-pass persona details, and content drafts I could react to instead of starting from a blank page.',
            ],
          },
          {
            id: 'ai-claude',
            heading: 'Claude',
            body: [
              'Used as a thinking partner across discovery, design, and content development. Most useful for pressure-testing decisions, connecting ideas back to learning theory, and cutting anything in the copy that read like it was written by a machine.',
            ],
          },
          {
            id: 'ai-openpeeps',
            heading: 'OpenPeeps',
            body: [
              'Used as the base illustration set for Carla and Jamie. Mixing and customising open-source, hand-drawn components meant I could build consistent, on-brand characters across every scene without commissioning custom illustration.',
            ],
          },
          {
            id: 'ai-figma',
            heading: 'Figma',
            body: [
              'Used for every visual asset: character illustrations, background scenes, the course map, and the persona card.',
              "AI sped up production and threw up ideas I wouldn't have landed on alone. The actual design calls stayed mine.",
            ],
          },
        ]}
      />

      {/* 15. Constraints and trade-offs */}
      {/* Visual opportunity: this reads as a plain list right now. A lightweight icon row
          or a simple "now vs. version 2" roadmap graphic would show the trade-offs instead
          of just listing them. */}
      <AchievementsSection
        title="Constraints and trade-offs"
        achievements={[
          {
            id: 'constraint-speculative',
            title: 'Speculative brief',
            description:
              "The scenario, the organisation, and the characters are all made up. Primary research with real team leads would do a lot to strengthen the persona, the problem framing, and the discovery findings. The interview guide reflects how I'd actually run that phase on a real project.",
          },
          {
            id: 'constraint-solo',
            title: 'Solo practitioner',
            description:
              'No SME access and no real learner testing. Design decisions came from sector literature, proxy research, and learning design theory rather than primary data.',
          },
          {
            id: 'constraint-v2',
            title: 'Version 2 opportunities',
            description:
              'A full branching scenario in Storyline would make for a richer practice experience than the Pick One interaction. A companion piece, a Canvas onboarding intervention for team members, got identified but was descoped. Real learner data would actually make the Likert confidence surveys mean something.',
          },
        ]}
      />

      {/* 16. What I'd do differently */}
      <Takeaways
        paragraphs={[
          "Even one real team lead walking through this course would have surfaced assumptions I can't see from inside my own design. Usability testing with the actual target learner is what I'd prioritise first on a real version of this project.",
          "The Pick One interaction in Lesson 6 works, but a full branching scenario, where Jordan's choices lead to genuinely different conversations, would be a lot more immersive. That's the top priority for a version 2.",
          "The Likert confidence surveys sit at the start and end of the course. With real learners, the before-and-after data would tell you something real about what the course actually changed. Without real learners, they're structural placeholders, nothing more.",
        ]}
      />
    </>
  )
}
