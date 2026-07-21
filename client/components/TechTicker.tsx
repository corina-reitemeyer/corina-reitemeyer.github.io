const tools = [
  'Figma',
  'FigJam',
  'Notion',
  'Lovable',
  'Cursor',
  'Claude Code',
  'VS Code',
  'GitHub',
  'Tailwind',
  'WAVE',
  'axe',
  'VoiceOver',
  'Storybook',
]

function TickerSequence({ suffix }: { suffix: string }) {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6 motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:gap-y-3 motion-reduce:pr-0">
      {tools.map((tool) => (
        <span
          key={`${tool}-${suffix}`}
          className="flex items-center gap-6 whitespace-nowrap text-sm font-normal uppercase tracking-[0.12em] text-paper-muted"
        >
          <span>{tool}</span>
          <span aria-hidden="true" className="text-teal-mid">
            ·
          </span>
        </span>
      ))}
    </div>
  )
}

export default function TechTicker() {
  return (
    <section
      aria-label="Tools and technologies"
      className="w-full overflow-hidden border-b border-rule py-3"
    >
      <p className="sr-only">Tools include {tools.join(', ')}.</p>

      <div aria-hidden="true" className="overflow-hidden">
        <div className="flex w-max items-center motion-safe:animate-ticker motion-reduce:w-full motion-reduce:flex-wrap">
          <TickerSequence suffix="a" />
          <div className="flex shrink-0 motion-reduce:hidden">
            <TickerSequence suffix="b" />
          </div>
        </div>
      </div>
    </section>
  )
}
