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
import NoteBox from '../components/casestudy/NoteBox'
import ProcessFramework from '../components/casestudy/ProcessFramework'

export default function BuildingAdaptiveTeams() {
  return (
    <>
      {/* 1. Hero */}
      <CaseStudyNavy
        intro="A microlearning course for team leads navigating change, built on the idea that the conditions matter as much as the content."
        company="Concept"
        project="It will click eventually"
        imageSrc="/images/elearning/final-work/building-adaptive-teams-hero.webp"
        imageAlt="Building Adaptive Teams, course opening screen"
        disclaimer="Disclosure: the university, the people, and the numbers in this case study are invented for this concept project."
        overview={[
          "This is a fictional project. I made up the brief myself, and the point of it is to demonstrate how I'd approach an Instructional Design project end to end.",
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
        cta={{ label: 'Experience the live course', href: '#', external: true }}
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
            id: 'bat-lesson-three-call',
            src: '/images/elearning/final-work/course-lesson2.gif',
            alt: 'Lesson 3, "Closing It Off," a video call scene showing Carl\'s spoken dialogue alongside an italicised internal thought',
            caption:
              'Lesson 3, "Closing It Off." A video call scene pairs what Carl says out loud with what he\'s actually thinking, running side by side.',
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

      {/* 7. Discovery */}
      <ApproachSection
        title="Discovery"
        items={[
          {
            id: 'discovery-approach',
            heading: 'The approach',
            body: [
              'Instead of jumping straight to design, I built in a short discovery phase: four interviews across one week, meant to check the actual problem before committing to a solution.',
              "There's no real university behind this project, so there were no real interviews either. The interview guide is real, built the way I'd actually run this phase with real team leads. What follows it (the findings) is a plausible picture I put together from common patterns in tool adoption and change management, and my own experience of what change fatigue looks like on a team. None of it is a transcript.",
              "The interview guide itself was structured around three zones: Zone 1 (Their world), role, week, pressures, what good looks like. Zone 2 (Their workflow), how they currently do the things Canvas is supposed to help with. Zone 3 (The tool), what happened, what helped, what didn't.",
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
            links: [{ label: 'View full interview guide', href: '#' }],
          },
        ]}
      />

      <AchievementsSection
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

      <section className="bg-[#08082a] px-6 pb-16 sm:pb-24 lg:px-0">
        <div className="mx-auto max-w-2xl">
          <NoteBox>
            In a real project, this would be primary research with actual team
            leads and staff across multiple faculties, not constructed
            findings. The interview guide reflects how I&apos;d actually run
            that phase.
          </NoteBox>
        </div>
      </section>

      {/* 8. The dual problem */}
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

      {/* 9. The learner */}
      <ApproachSection
        title="The learner"
        items={[
          {
            id: 'learner-intro',
            body: [
              'Before designing anything, I needed to know who I was actually designing for. Not a generic team lead. A specific person, with a specific history and specific reasons to be wary of yet another new tool.',
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
          <NoteBox>
            In a real project, I&apos;d validate this persona through interviews
            with real team leads, instead of building it from general sector
            knowledge and my own assumptions.
          </NoteBox>
        </div>
      </section>

      {/* 10. Design decisions */}
      <ApproachSection
        title="Design decisions"
        items={[
          {
            id: 'design-narrative',
            heading: 'Narrative over instruction',
            body: [
              "Most learning about change management tells people what to do. This course shows what happens when someone doesn't, and lets the learner work out why on their own.",
              "Carl and Jamie's story leans on vicarious learning theory, Bandura's idea that people learn well by watching someone else navigate a situation and feel the consequences, before they're asked to apply anything themselves.",
              'The story also creates some distance. Jordan can watch Carl get it wrong without feeling personally attacked. By the time the course asks Jordan to reflect on their own team, most of the emotional groundwork is already done.',
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
              "Rise handled the content-heavy narrative lessons: scrolling, readable, works fine on a phone. Storyline handled the branching interaction in Lesson 6, where the learner actually steers Carl's conversation with Jamie.",
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
              'The Storyline interaction gives consequence feedback instead of marking answers correct or incorrect. Jordan sees what happens after Carl makes each choice, not a red cross or a green tick.',
              "That choice mirrors what the course is actually about. A course on psychological safety shouldn't shame learners for getting an answer wrong. The assessment has to practise what the content teaches.",
            ],
          },
          {
            id: 'design-attitude',
            heading: 'Attitude before skill',
            body: [
              "The course opens with empathy: Jordan watches Carl and Jamie's conversation play out before being asked to change anything about their own behaviour. That's grounded in Mezirow's transformative learning theory, the idea that a shift in perspective needs emotional engagement before it can take on any cognitive instruction. You can't teach someone to create psychological safety if they haven't first felt what it costs to go without it.",
            ],
          },
        ]}
      />

      {/* 11. Learning theory */}
      <KeyOutcomes
        title="Learning theory"
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

      {/* 14. Constraints and trade-offs */}
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
              'No SME access and no real learner testing. Design decisions came from general sector knowledge, learning design theory, and my own experience, rather than primary data.',
          },
          {
            id: 'constraint-v2',
            title: 'Version 2 opportunities',
            description:
              'A full branching scenario in Storyline would make for a richer practice experience than the Pick One interaction. A companion piece, a Canvas onboarding intervention for team members, got identified but was descoped. Real learner data would actually make the Likert confidence surveys mean something.',
          },
        ]}
      />

      {/* 15. What I'd do differently */}
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
