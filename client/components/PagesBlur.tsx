import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

const ENTER = 0.45
const EXIT = 0.28

export default function PageBlur({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  const initial = reduce
    ? { opacity: 0 }
    : { opacity: 0, filter: 'blur(10px)', y: 12 }
  const animate = reduce
    ? { opacity: 1, transition: { duration: ENTER } }
    : {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { duration: ENTER, ease: 'easeOut' },
      }
  const exit = reduce
    ? { opacity: 0, transition: { duration: EXIT } }
    : {
        opacity: 0,
        filter: 'blur(8px)',
        y: -8,
        transition: { duration: EXIT, ease: 'easeIn' },
      }

  return (
    <motion.main
      initial={initial}
      animate={animate}
      exit={exit}
      className={className}
    >
      {children}
    </motion.main>
  )
}
