import { motion, useScroll, useSpring } from 'motion/react'

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-r-full"
        style={{
          scaleX,
          transformOrigin: '0%',
          boxShadow:
            '0 0 10px rgba(var(--portfolio-accent-rgb, 239, 68, 68), 0.7), 0 0 20px rgba(var(--portfolio-accent-glow-rgb, 220, 38, 38), 0.5)',
        }}
      />
    </div>
  )
}

export default ScrollIndicator
