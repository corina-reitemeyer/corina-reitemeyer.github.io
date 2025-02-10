import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  type Role =
    | 'default'
    | 'recruiters'
    | 'productDesigners'
    | 'productManagers'
    | 'engineers'
  const [selectedRole, setSelectedRole] = useState<Role>('default')

  const paragraphs: Record<Role, string> = {
    default:
      'I design digital experiences that feel simple and natural. Whether it’s making technology easier to use, improving everyday tools, or creating clear, user-friendly interfaces, my goal is to remove frustration and make things work effortlessly.',
    recruiters:
      'Senior Product Designer with AI-Driven UX & Design Systems expertise, bridging user experience, business strategy, and technical feasibility. I specialise in scalable, user-centric design for complex workflows, crafting intuitive interfaces that drive engagement and efficiency. I’m currently looking for new opportunities.',
    productDesigners:
      'Passionate about creating scalable design solutions, I specialise in AI-Driven UX and Design Systems that simplify complexity. Whether designing for automation, improving usability, or refining interaction models, I love finding the balance between logic, creativity, and accessibility.',
    productManagers:
      'I turn complex problems into scalable, intuitive user experiences. With expertise in AI-Driven UX & Design Systems, I bridge user needs, business strategy, and technical feasibility—delivering designs that enhance usability, drive engagement, and support product growth.',
    engineers:
      'I create scalable, structured designs that align with development workflows. With a strong understanding of AI-Driven UX, Design Systems, and front-end development, I collaborate closely with engineers to ensure feasible, consistent, and performance-optimised interfaces.',
  }

  // Helper function to convert camelCase to Regular Case (First letter uppercase, rest lowercase)
  const formatRoleName = (role: string) => {
    return role
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .replace(/^./, (str) => str.toUpperCase())
  }

  return (
    <section className="mx-auto flex max-w-6xl items-start justify-between px-8 py-32">
      {/* Left Side - Dynamic Paragraph with Fade Effect */}
      <div className="w-2/4 text-left">
        <motion.p
          key={selectedRole}
          className="text-3xl font-medium leading-snug text-[#272343]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {paragraphs[selectedRole]}
        </motion.p>
      </div>

      {/* Right Side - Clickable Menu */}
      <div className="flex w-1/3 flex-col space-y-3">
        <button
          className={`text-left text-lg transition-all duration-300 ${
            selectedRole === 'default'
              ? 'font-normal text-[#272343]'
              : 'font-light text-[#8B8A8A]'
          }`}
          onClick={() => setSelectedRole('default')}
        >
          For anyone
        </button>

        {(
          [
            'recruiters',
            'productDesigners',
            'productManagers',
            'engineers',
          ] as Role[]
        ).map((role) => (
          <button
            key={role}
            className="relative text-left text-lg transition-all duration-300"
            onClick={() => setSelectedRole(role)}
          >
            {/* Invisible placeholder to prevent shifting */}
            <span className="invisible absolute font-normal">
              {formatRoleName(role)}
            </span>
            <span
              className={`transition-colors ${
                selectedRole === role
                  ? 'font-normal text-[#272343]'
                  : 'font-light text-[#8B8A8A]'
              }`}
            >
              {formatRoleName(role)}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
