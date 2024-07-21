const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-48">
        <div className="w-full max-w-3xl px-4">
          <div className="mb-6 flex w-full items-center justify-center">
            <img src="/images/sunflower.png" alt="" className="max-w-xs" />
          </div>
          <h2 className="py-4 text-3xl font-bold">Get in touch</h2>
          <p className="paragraph">
            Have an idea you want to talk about? Let&apos;s have a chat!
          </p>

          <p>
            Send me an{' '}
            <a
              href="mailto:corina@corina.org"
              className="text-amber-600 hover:underline"
            >
              email
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/corinareitemeyer"
              target="_blank"
              className="text-amber-600 hover:underline"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            . Whether it&apos;s about a project, a job opportunity, or would
            like some design mentoring (NZ only) - I&apos;m here to help 😊
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
