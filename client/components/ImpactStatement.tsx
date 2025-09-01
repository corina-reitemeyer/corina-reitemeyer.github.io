import { motion } from 'framer-motion'
import React from 'react'

type ImpactStatementProps = {
  lines: (string | React.ReactNode)[]
  align?: 'left' | 'center'
  className?: string
  padded?: boolean // add vertical padding when needed; default false
}

export default function ImpactStatement({
  lines,
  align = 'left',
  className = '',
  padded = false,
}: ImpactStatementProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left'
  const padY = padded ? 'py-16 md:py-24' : '' // no vertical padding by default

  return (
    <div
      className={`mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-0 ${padY} ${className}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          ${alignClasses}
          text-[40px] font-bold leading-[1.25]
          tracking-tight text-white
          sm:text-[75px] sm:leading-[1.2]
          md:text-[100px] md:leading-[1.15]
          lg:text-[72px] lg:leading-[1.1]
          xl:text-[130px] xl:leading-[1.08]
          2xl:text-[150px] 2xl:leading-[1.2]
        `}
      >
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </motion.h1>
    </div>
  )
}
