import { motion, useReducedMotion } from 'framer-motion'

const ENTER = 0.45
const EXIT = 0.28

interface PageBlurProps {
  children: React.ReactNode
  className?: string
}

export default function PageBlur({ children, className }: PageBlurProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={
        reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(10px)', y: 12 }
      }
      animate={
        reduce
          ? { opacity: 1, transition: { duration: ENTER } }
          : {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              transition: { duration: ENTER, ease: 'easeOut' },
            }
      }
      exit={
        reduce
          ? { opacity: 0, transition: { duration: EXIT } }
          : {
              opacity: 0,
              filter: 'blur(8px)',
              y: -8,
              transition: { duration: EXIT, ease: 'easeIn' },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
