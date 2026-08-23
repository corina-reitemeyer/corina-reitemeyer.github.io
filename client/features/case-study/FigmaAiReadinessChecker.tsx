import { useCaseStagedChrome } from './useCaseStagedChrome'
import { ROUTES } from '../../lib/routes'
import CaseStagedHero from './components/CaseStagedHero'
import CaseStagedSplit from './components/CaseStagedSplit'
import CaseStagedStory from './components/CaseStagedStory'

export default function FigmaAiReadinessChecker() {
  useCaseStagedChrome()

  return (
    <>
      <CaseStagedHero
        backHref={ROUTES.playground}
        backLabel="Back to playground"
        meta="Playground · Figma plugin · Completed, still testing · 2026"
        title="A Figma plugin that flags what's not AI-ready in a component."
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

      <CaseStagedStory
        category="The old workflow"
        title="Reviewing a chat log instead of building"
        body={[
          "I finish a component or a mockup of a screen, then ask Figma's native AI agent whether it's ready for another agent to work with. It answers in a chat window, spread across three messages. Helpful, until by the second message I've already forgotten what the first one told me to fix. Lots of scrolling, lots of double-checking, more time reviewing than building. The longer I check, the worse the context spaghetti gets.",
          {
            bold: true,
            text: "I want to work in the canvas and build something that works, not review and backtrack through a chat log and lose my god damn mind. 🥲",
          },
        ]}
      />

      <CaseStagedStory
        title="What actually made it hard"
        body={[
          "Beyond the chat log itself, three things made it hard to act on. Nothing pointed me to the flagged element, so I'd go hunting for it across the frame. There was no quick way to recheck after a fix, so I couldn't tell if I'd solved it or just moved the problem. And there was no score or severity indicator, so I had no real sense of how far off \"ready\" the design actually was, just a wall of text.",
          {
            bold: true,
            text: "There's a harder problem underneath all of that: I'm still peeling back what \"agent-ready\" actually means in a practical sense, not just in theory. I had to build the tool while still figuring out what it was checking for.",
          },
        ]}
      />

      <CaseStagedStory
        category="Creating the solution"
        title="From drafts to ground rules"
        body={[
          "I started by looking at how other checker tools handle this kind of problem, accessibility checkers, design linters, performance checkers, and researching the conventions already forming around agent-readiness for AI tools. Once I'd drafted the main screens, I used Figma MCP to turn them into a design.md and a ux-functional.md, and fed both into Cursor as ground rules before writing any plugin code.",
        ]}
        image={{
          src: '/images/portfolio/making/process/ai-ready-plugin-first-designs.webp',
          alt: 'A collage of early plugin screen drafts: empty state, a loading scan, and first versions of the Overview, Issues, and Agent view panels',
          caption: 'First drafts of the core screens, before any of the visual polish.',
        }}
      />

      <CaseStagedStory
        title="Where Cursor sped things up"
        body={[
          "Feeding Cursor one screen at a time, broken into smaller components, worked well for the repetitive ground: button states, hover states, and the other variations I'd otherwise have hand-built one by one. This is where AI earned its keep, turning a screen I'd already established into its full set of states in a fraction of the time.",
        ]}
        image={{
          src: '/images/portfolio/making/process/ai-ready-plugin-ai-gen-draft.jpg',
          alt: "An AI-generated draft of the Overview and Issues panels, showing an orange 'Needs work' score and a green 'Quick fixes' panel",
          caption: 'Prompting for states and variations of the existing screens instead of hand-building each one.',
        }}
      />

      <CaseStagedStory
        title="Where it slowed down, and I had to step in"
        body={[
          "The Agent view was the opposite experience. Deciding what actually counts as useful evidence for an AI agent, layout, property values, token coverage, isn't something Cursor could infer on its own. That part needed my own judgment call, screen by screen, tested against a real design each time before I trusted it.",
        ]}
        image={{
          src: '/images/portfolio/making/process/plugin-agentview.webp',
          alt: "Two panels of the plugin's Agent view, showing a component's layout, property values, and design-token coverage",
          caption: 'The Agent view mid-testing: what an AI agent would see about a component\'s structure and tokens.',
        }}
      />

      <CaseStagedStory
        title="Press a button, not read a chat log"
        body={[
          "Press a button, run a quick scan, and the plugin surfaces what's flagged. It doesn't just point at the quick fixes, it helps me understand why something needs adjusting and how, right where the element sits.",
          "Agent view goes a layer deeper: properties, tokens, and values laid bare, so I can see if I've missed something. It's like an X-ray for the design.",
        ]}
      />

      <CaseStagedStory
        variant="outcome"
        title="Where it's actually being used"
        body={[
          "I've been running it on AXON, my design system side project, and on an app I'm building, and it's already cut away a lot of the frustration I had with the conversational check.",
          "I'm not fully trusting it yet, though. While I'm still testing and refining, I keep a final check in the loop, both with Figma AI and inside my coding tool of choice. Several agents, backed by different LLMs, often pick up different things.",
          {
            bold: true,
            text: 'Cross-checking across all of them is how I get to full confidence in the results.',
          },
        ]}
      />
    </>
  )
}
