const About = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="max-w-3xl px-4">
          <img
            src="/images/corina_about.png"
            alt="Smiling woman surrounded by two yellow circles"
            className="profile-image mx-auto mb-8"
          />
          <h2 className="py-8 text-3xl font-bold">Hi! I&apos;m Corina 👋</h2>
          <p className="paragraph">
            I&apos;m a Full Stack Developer, backed with 6-7 years experience
            working as a Senior UX/UI Designer in the tech industry. My journey
            into technology began in my teens, where I explored both design and
            coding out of personal interest. After dedicating a significant
            portion of my career to UX/UI design, I decided to shift gears from
            design to delve deeper into programming. In March 2024, I enrolled
            in a fast-paced 17-week bootcamp at Dev Academy Aotearoa to
            specialise in Full Stack Web Development.
          </p>
          <p className="paragraph">
            My aim is to create easy-to-use software that enhances users&apos;
            trust and improves their experience with digital products, keeping
            things simple and enjoyable. I prioritise best practices and thrive
            on continuous learning, embracing new technologies to deliver
            valuable results. I find fulfilment in tackling challenges, whether
            it&apos;s through coding or design.{' '}
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
