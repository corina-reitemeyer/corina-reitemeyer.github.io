type ParagraphsProps = {
  children: string | string[]
  className?: string
}

/** Renders a string or array of strings as one <p> per paragraph. */
export default function Paragraphs({ children, className }: ParagraphsProps) {
  const paragraphs = Array.isArray(children) ? children : [children]

  return (
    <>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className={className}>
          {paragraph}
        </p>
      ))}
    </>
  )
}
