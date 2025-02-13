import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  type Role =
    | 'default'
    | 'recruiters'
    | 'productDesigners'
    | 'productManagers'
    | 'userResearchers'
    | 'engineers'
  const [selectedRole, setSelectedRole] = useState<Role>('default')

  const paragraphs: Record<Role, string> = {
    default:
      'I design digital experiences that feel intuitive and easy to use. Whether it’s simplifying technology, improving everyday tools, or creating interfaces, my goal is to make things feel simple and natural.',
    recruiters:
      'Senior Product Designer specialising in AI-Driven UX and Design Systems. I bring together user experience, business strategy, and technical feasibility to create intuitive, scalable designs for complex workflows. I’m currently exploring new opportunities.',
    productDesigners:
      'I design scalable, user-centric solutions that simplify complexity. Specialising in AI-Driven UX and Design Systems, I focus on intelligent interactions, usability, and interaction models—balancing logic, creativity, and accessibility to build seamless experiences.',
    productManagers:
      'I turn complex problems into structured, intuitive experiences. I connect customer needs, business goals, and technical feasibility to create designs that drive engagement, retention, and product growth.',
    userResearchers:
      'I design with a data-informed approach, leveraging UX research insights to create intuitive, research-backed experiences. I collaborate closely with researchers and data teams to ensure design decisions are grounded in real user needs.',
    engineers:
      'I create structured, scalable designs that fit seamlessly into development workflows. With a skill-set in full-stack web development, I collaborate closely with engineers to ensure designs are clear, consistent, and performance-optimised.',
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
    <section className="mx-auto flex max-w-6xl flex-col items-start justify-between space-y-8 px-8 py-24 md:flex-row md:space-y-0 md:py-32">
      {/* Left Side - Dynamic Paragraph (Appears First on All Screens) */}
      <div className="w-full text-left md:w-3/4">
        <motion.p
          key={selectedRole}
          className="text-2xl font-medium leading-snug text-[#272343] md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {paragraphs[selectedRole]}
        </motion.p>

        {/* On mobile, display links below the paragraph with added top margin */}
        <div className="mt-8 flex w-full flex-col space-y-3 md:hidden">
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
      </div>

      {/* Right Side - Clickable Menu (Desktop Only) */}
      <div className="ml-24 hidden w-1/3 flex-col space-y-3 md:flex">
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
