const About = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="max-w-3xl px-4 py-12">
          <img
            src="/images/corina_about.png"
            alt="Smiling woman surrounded by two yellow circles"
            className="profile-image mx-auto mb-8"
          />
          <h2 className="py-8 text-3xl font-bold">Hi! I&apos;m Corina 👋</h2>
          <p className="paragraph">
            I&apos;m a Senior UX/UI designer and Full Stack Developer with a
            passion for data analytics, allowing me to create user-centered
            solutions that are both functional and impactful. With 6-7 years of
            experience in tech under my belt, I love uncovering the stories that
            data tells, and crafting experiences that truly resonate with
            people.
          </p>
          <p className="paragraph">
            My tech journey kicked off in my teens, sparked by a curiosity for
            both design and coding. After diving deep into UX/UI design for
            several years, I decided to pivot toward programming. In March 2024,
            I jumped into a fast-paced 17-week bootcamp at Dev Academy to
            specialise in Full Stack Web Development. Not long after, I plunged
            into data analytics to see how I could blend my UX background with
            my technical skills to uncover valuable insights and create
            meaningful solutions.
          </p>
          <p className="paragraph">
            I&apos;m all about best practices and thrive on continuous learning,
            always eager to embrace new technologies to deliver awesome results.
            I find joy in tackling challenges, whether it&apos;s through coding
            or design, and finding interesting insights and patterns in
            datasets.
          </p>
          <p className="paragraph">
            In 2019, I co-founded HackathonsNZ, where I helped capture event
            moments and boost the social media presence of Hackathon events in
            Aotearoa.
          </p>
          <p className="paragraph">
            When I&apos;m not in front of my computer, I enjoy Latin dancing and
            Reformer Pilates outside of coding. I&apos;m also a massive fan of
            cozy games!
          </p>
          <h3 className="mb-2 text-left text-2xl font-bold">Accolades:</h3>
          <p className="text-left text-lg">
            <a
              href="https://bestawards.co.nz/digital/student-digital/massey-university-college-of-creative-arts/infinite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="text-amber-400 underline decoration-solid">
                Best Awards:
              </strong>
            </a>
            {''} Bronze Award, 2018
          </p>
        </div>
      </div>
    </>
  )
}

export default About
