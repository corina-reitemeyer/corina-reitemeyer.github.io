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
      'I design digital experiences that feel intuitive and easy to use. Whether it’s making everyday tools more user-friendly, streamlining complex tasks, or creating clean, simple interfaces, I love finding ways to make technology work better for people.',
    recruiters:
      'A Senior Product Designer specialising in AI-Driven UX and Design Systems. I create intuitive, scalable experiences that simplify complex tools and make technology easier to use. I’m looking for opportunities with teams building products that have a meaningful, positive impact on people’s lives.',
    productDesigners:
      'I love transforming complexity into clarity. Specialising in AI-Driven UX and Design Systems, I craft intelligent, user-centric solutions that feel seamless and scalable. My work balances logic, creativity, and accessibility—ensuring experiences that just make sense.',
    productManagers:
      'I turn ambiguity into structured, intuitive experiences. By aligning user needs, business goals, and technical constraints, I design products that not only solve problems but also drive engagement, retention, and long-term growth.',
    userResearchers:
      'I design with intent, ensuring every decision is rooted in research. By closely collaborating with researchers and data teams, I translate insights into meaningful, user-driven experiences that are intuitive, scalable, and backed by real-world needs.',
    engineers:
      'I craft structured, scalable designs that integrate smoothly into development. With a background in full-stack web development, I collaborate closely with engineers to create clear, consistent, and performance-optimised experiences that are a joy to build and use.',
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
    <section className="mx-auto flex max-w-6xl flex-col items-start justify-between space-y-8 bg-[#08082a] px-8 py-24 md:flex-row md:space-y-0 md:py-28">
      {/* Left Side - Dynamic Paragraph (Appears First on All Screens) */}
      <div className="w-full pb-16 text-left md:w-3/4">
        <motion.p
          key={selectedRole}
          className="text-2xl font-medium leading-snug text-white md:text-3xl"
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
                ? 'font-normal text-white'
                : 'font-light text-white/60'
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
                    ? 'font-normal text-white'
                    : 'font-light text-white/60'
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
              ? 'font-normal text-white'
              : 'font-light text-white/70'
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
                  ? 'font-normal text-white'
                  : 'font-light text-white/70'
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
