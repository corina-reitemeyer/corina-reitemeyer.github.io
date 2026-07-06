type DisclaimerProps = {
  children: string
  className?: string
}

export default function Disclaimer({ children, className = '' }: DisclaimerProps) {
  return (
    <aside
      className={`flex items-start gap-4 rounded-lg border border-[#CBEDE8]/20 bg-white/[0.03] px-5 py-4 ${className}`}
    >
      <span
        aria-hidden="true"
        className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[#CBEDE8]/50 text-sm font-semibold text-[#CBEDE8]/80"
      >
        i
      </span>
      <p className="text-base italic leading-relaxed text-slate-300">
        {children}
      </p>
    </aside>
  )
}
