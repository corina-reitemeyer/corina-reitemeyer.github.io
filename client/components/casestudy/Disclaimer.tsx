type DisclaimerProps = {
  children: string
  className?: string
}

export default function Disclaimer({ children, className = '' }: DisclaimerProps) {
  return (
    <aside
      className={`flex items-center gap-4 rounded-lg border border-[#CBEDE8]/20 bg-white/[0.03] px-5 py-4 ${className}`}
    >
      <img
        src="/icons/info-icon.svg"
        alt=""
        aria-hidden="true"
        className="h-6 w-6 flex-none"
      />
      <p className="text-base italic leading-relaxed text-slate-300">
        {children}
      </p>
    </aside>
  )
}
