import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Role =
  | 'default'
  | 'recruiters'
  | 'productDesigners'
  | 'productManagers'
  | 'userResearchers'
  | 'engineers'

const paragraphs: Record<Role, string> = {
  default:
    "I design digital experiences that feel intuitive and easy to use. Whether it's making everyday tools more user-friendly, or creating clean, simple interfaces, I love finding ways to make technology work better for people.",
  recruiters:
    "I'm a Senior UX/UI Designer with expertise in AI-driven UX and scalable design systems. In the past 7 years, I've helped teams simplify complex workflows, improve product adoption, and deliver seamless user experiences at scale.",
  productDesigners:
    'I thrive on collaboration, value constructive critique, and bring clarity to complex problems. Working with me means clear, open communication, curiosity, and a genuine focus on making the team stronger.',
  productManagers:
    'I turn ambiguity into structured, intuitive experiences that align with vision and strategy. By connecting user needs, business goals, and technical realities, I influence product direction and design solutions that drive engagement, retention, and long-term growth.',
  userResearchers:
    'I design with intent, ensuring every decision is rooted in research. By closely collaborating with researchers and data teams, I translate insights into meaningful, user-driven experiences that are intuitive, scalable, and backed by real-world needs.',
  engineers:
    'I design structured, scalable systems that integrate seamlessly into development. With a background in full-stack web, I speak the language of code and collaborate closely to deliver clear, consistent, and performance-ready experiences that are rewarding to build.',
}

function formatRoleName(role: string): string {
  return role
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase())
}

const roles: Role[] = [
  'recruiters',
  'productDesigners',
  'productManagers',
  'userResearchers',
  'engineers',
]

type RoleButtonProps = {
  role: Role
  selectedRole: Role
  onSelect: (role: Role) => void
}

function RoleButton({ role, selectedRole, onSelect }: RoleButtonProps) {
  const isSelected = selectedRole === role
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => onSelect(role)}
      className={`text-left text-lg transition-all duration-300 ${
        isSelected ? 'font-normal text-white' : 'font-light text-slate-400'
      }`}
    >
      {formatRoleName(role)}
    </button>
  )
}

export default function HeroSection() {
  const headingId = useId()
  const [selectedRole, setSelectedRole] = useState<Role>('default')

  return (
    <section aria-labelledby={headingId} className="bg-[#08082a]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:py-16">
        <div
          className="
            grid grid-cols-1
            gap-y-8 sm:gap-y-9 md:grid-cols-12
            md:gap-x-24 md:gap-y-10
            xl:gap-x-20 2xl:gap-x-16
          "
        >
          {/* Left — animated paragraph */}
          <div className="text-left md:col-span-7">
            <div className="md:relative md:min-h-[8.25rem] md:max-w-[58ch] xl:max-w-[54ch] 2xl:max-w-[52ch]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={selectedRole}
                  id={headingId}
                  className="text-2xl font-medium text-white md:absolute md:inset-0 md:text-3xl"
                  initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                >
                  {paragraphs[selectedRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Mobile role selector */}
            <div className="mt-8 flex w-full flex-col space-y-3 md:hidden">
              <button
                type="button"
                aria-pressed={selectedRole === 'default'}
                onClick={() => setSelectedRole('default')}
                className={`text-left text-lg transition-all duration-300 ${
                  selectedRole === 'default'
                    ? 'font-normal text-white'
                    : 'font-light text-slate-400'
                }`}
              >
                For anyone
              </button>
              {roles.map((role) => (
                <RoleButton
                  key={role}
                  role={role}
                  selectedRole={selectedRole}
                  onSelect={setSelectedRole}
                />
              ))}
            </div>
          </div>

          {/* Right — sticky desktop role selector */}
          <aside className="hidden flex-col space-y-3 self-start md:sticky md:top-24 md:col-span-3 md:flex xl:top-20 2xl:top-16">
            <button
              type="button"
              aria-pressed={selectedRole === 'default'}
              onClick={() => setSelectedRole('default')}
              className={`text-left text-lg transition-all duration-300 ${
                selectedRole === 'default'
                  ? 'font-normal text-white'
                  : 'font-light text-slate-400'
              }`}
            >
              For anyone
            </button>
            {roles.map((role) => (
              <RoleButton
                key={role}
                role={role}
                selectedRole={selectedRole}
                onSelect={setSelectedRole}
              />
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
