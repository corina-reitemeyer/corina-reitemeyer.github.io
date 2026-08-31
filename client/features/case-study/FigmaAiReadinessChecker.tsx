import { useCaseStagedChrome } from './useCaseStagedChrome'
import { ROUTES } from '../../lib/routes'
import CaseStagedHero from './components/CaseStagedHero'
import CaseStagedSplit from './components/CaseStagedSplit'
import CaseStagedLogEntry from './components/CaseStagedLogEntry'

export default function FigmaAiReadinessChecker() {
  useCaseStagedChrome()

  return (
    <>
      <CaseStagedHero
        backHref={ROUTES.playground}
        backLabel="Back to playground"
        meta="Playground · Figma plugin · Completed, still testing · 2026"
        title="A Figma plugin that flags what's not AI‑ready in a component."
        marginNote="testing now"
      />

      <CaseStagedSplit
        railTitle="What's broken, why, and how to fix it, right in the canvas."
        railLede="An upskilling project: a Figma plugin that checks components for AI-readiness without a chat log to reread or a mental checklist to hold."
        aboutParagraphs={[
          "A Figma plugin that flags what's not AI-ready in a component, right in the canvas: what's broken, why, and how to fix it. No chat log to reread, no mental checklist.",
        ]}
        meta={[
          { label: 'Category', value: 'Plugin' },
          { label: 'Status', value: 'Completed, still testing' },
          { label: 'Year', value: '2026' },
        ]}
        panels={[
          {
            id: 'overview-full',
            grid: 'full',
            images: [
              {
                id: 'figma-ai-readiness-cover',
                src: '/images/portfolio/making/plugin-overview.webp',
                alt: "The plugin's Issues, Overview, and Agent view panels side by side",
                caption: 'The plugin today: an AI-readiness score, an issues list, and an agent-facing view of a component.',
              },
            ],
          },
        ]}
      />

      <CaseStagedLogEntry
        date="26 Aug 2026"
        title="Sharing a first look"
        tags={['Testing', 'Sneak peek']}
        sectionIntro={{
          eyebrow: 'Log',
          heading: 'How this has gone so far',
          lede: 'A few days, logged roughly as they happened, newest first.',
        }}
        body={[
          "Press a button, run a quick scan, and the plugin surfaces what's flagged. It doesn't just point at the quick fixes, it helps me understand why something needs adjusting and how, right where the element sits. Agent view goes a layer deeper: properties, tokens, and values laid bare, so I can see if I've missed something. It's like an X-ray for the design.",
          "I've been running it on AXON, my design system side project, and tested it against an example app screen too. It's already cut away a lot of the frustration I had with the conversational check. Today I shared a first look on LinkedIn, a short recording of it working through a real design.",
          "I'm not fully trusting it yet, though. While I'm still testing and refining, I keep a final check in the loop, both with Figma AI and inside my coding tool of choice. Several agents, backed by different LLMs, often pick up different things.",
          {
            bold: true,
            text: 'Cross-checking across all of them is how I get to full confidence in the results.',
          },
        ]}
      />

      <CaseStagedLogEntry
        date="24–25 Aug 2026"
        title="The new loop"
        tags={['Workflow']}
        loopLabel="Fix and rescan repeats until the scan comes back clean, before I ever open a chat window."
        steps={[
          {
            id: 'new-design',
            label: 'Design',
            description: 'Finish a component or screen, feeling good about it.',
          },
          {
            id: 'new-scan',
            groupLabel: 'The new loop',
            label: 'Run the plugin',
            description: 'One button, instant scan of the frame. No dread this time.',
          },
          {
            id: 'new-fix',
            label: "Fix what's flagged",
            description: "What's broken, why, and how, with a jump into the Agent view for the full picture. Understanding instead of guessing, for once.",
          },
          {
            id: 'new-rescan',
            label: 'Rescan',
            description: 'Confirm the fix landed. Relief, not guesswork.',
          },
          {
            id: 'new-confirm',
            groupLabel: 'Confidence check',
            label: 'Compare notes',
            description: 'Figma AI, plus my coding agents, just to be sure. Confidence, not blind trust.',
          },
        ]}
      />

      <CaseStagedLogEntry
        date="24–25 Aug 2026"
        title="Where AI sped up, and where I had to slow down"
        tags={['Build']}
        body={[
          "I started by looking at how other checker tools handle this kind of problem, accessibility checkers, design linters, performance checkers, and researching the conventions already forming around agent-readiness for AI tools. Once I'd drafted the main screens, I used Figma MCP to turn them into a design.md and a ux-functional.md, and fed both into Cursor as ground rules before writing any plugin code.",
          "Feeding Cursor one screen at a time, broken into smaller components, worked well for the repetitive ground: button states, hover states, and the other variations I'd otherwise have hand-built one by one. This is where AI earned its keep, turning a screen I'd already established into its full set of states in a fraction of the time.",
          "The Agent view was the opposite experience. Deciding what actually counts as useful evidence for an AI agent, layout, property values, token coverage, isn't something Cursor could infer on its own. That part needed my own judgment call, screen by screen, tested against a real design each time before I trusted it.",
        ]}
        image={{
          src: '/images/portfolio/making/process/ai-ready-plugin-first-designs.webp',
          alt: 'A collage of early plugin screen drafts: empty state, a loading scan, and first versions of the Overview, Issues, and Agent view panels',
          caption: 'First drafts of the core screens, before any of the visual polish.',
        }}
      />

      <CaseStagedLogEntry
        date="21–22 Aug 2026"
        title="The old loop"
        tags={['Workflow']}
        loopLabel="Check again loops straight back into the chat. Each pass starts with less certainty than the one before."
        steps={[
          {
            id: 'old-design',
            label: 'Design',
            description: 'Finish a component or screen, feeling good about it.',
          },
          {
            id: 'old-ask',
            groupLabel: 'The chat loop',
            label: 'Ask Figma AI',
            description: 'Check readiness in the native chat, hopeful this will be quick.',
          },
          {
            id: 'old-list',
            label: 'Get a list back',
            description: "Three messages, no severity, no jump-to-element. I'm already losing the thread.",
          },
          {
            id: 'old-refine',
            label: 'Refine from memory',
            description: "Try to fix what I think I remember, guessing more than fixing.",
          },
          {
            id: 'old-check',
            label: 'Check again',
            description: 'More confused than when I started.',
          },
        ]}
      />

      <CaseStagedLogEntry
        date="21–22 Aug 2026"
        title="Reviewing a chat log instead of building"
        tags={['Problem']}
        body={[
          "I finish a component or a mockup of a screen, then ask Figma's native AI agent whether it's ready for another agent to work with. It answers in a chat window, spread across three messages. Helpful, until by the second message I've already forgotten what the first one told me to fix. Lots of scrolling, lots of double-checking, more time reviewing than building. The longer I check, the worse the context spaghetti gets.",
          {
            bold: true,
            text: "I want to work in the canvas and build something that works, not review and backtrack through a chat log and lose my god damn mind. 🥲",
          },
          "Beyond the chat log itself, three things made it hard to act on. Nothing pointed me to the flagged element, so I'd go hunting for it across the frame. There was no quick way to recheck after a fix, so I couldn't tell if I'd solved it or just moved the problem. And there was no score or severity indicator, so I had no real sense of how far off \"ready\" the design actually was, just a wall of text.",
          {
            bold: true,
            text: "There's a harder problem underneath all of that: I'm still peeling back what \"agent-ready\" actually means in a practical sense, not just in theory. I had to build the tool while still figuring out what it was checking for.",
          },
        ]}
      />
    </>
  )
}
