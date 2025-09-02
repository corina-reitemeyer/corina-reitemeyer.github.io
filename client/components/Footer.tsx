export default function Footer() {
  return (
    <footer className="w-full bg-[#08082a] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-8">
        {/* horizontal rule */}
        <div className="mb-6 h-[3px] w-12 bg-white"></div>

        {/* links */}
        <div className="flex flex-wrap gap-8">
          <a
            href="https://www.linkedin.com/in/corinareitemeyer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white transition hover:text-white/70"
          >
            LinkedIn.
          </a>
        </div>
      </div>
    </footer>
  )
}
