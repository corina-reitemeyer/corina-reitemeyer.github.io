const Contact = () => {
  return (
    <>
      <div className="flex justify-center px-4 py-16 sm:px-8">
        <div className="w-full max-w-4xl rounded-3xl border-4 border-black bg-white p-8 text-center sm:p-10">
          {/* Heading */}
          <h2 className="font-heading mb-6 text-3xl font-extrabold text-black">
            Get in Touch
          </h2>

          {/* Text Wrapper with Max Width */}
          <div className="mx-auto max-w-md px-4 sm:max-w-lg">
            {/* Contact Info */}
            <p className="font-body text-lg leading-relaxed text-gray-800">
              Send me an{' '}
              <a
                href="mailto: corina@corina.org"
                className="text-black underline decoration-4 hover:text-purple-500"
              >
                email
              </a>{' '}
              or connect with me on{' '}
              <a
                href="https://www.linkedin.com/in/corinareitemeyer/"
                target="_blank"
                className="text-black underline decoration-4 hover:text-purple-500"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              . Whether it&apos;s about a project, a job opportunity, or you’d
              like some design mentoring — I&apos;m here to help 😊
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
