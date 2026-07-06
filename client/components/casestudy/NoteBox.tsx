type NoteBoxProps = {
  children: string
}

export default function NoteBox({ children }: NoteBoxProps) {
  return (
    <aside className="mt-8 rounded-r-lg border-l-2 border-[#CBEDE8]/30 bg-white/[0.04] px-5 py-4">
      <p className="text-sm italic leading-relaxed text-slate-400">{children}</p>
    </aside>
  )
}
