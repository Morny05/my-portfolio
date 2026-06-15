"use client";


export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#07122B] mb-12">
          Get in Touch
        </h2>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-8 md:p-10">

          {/* Card Title */}
          <h3 className="text-2xl font-bold text-[#07122B] mb-8">
            Contact Me
          </h3>

          {/* Form */}
          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#07122B]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#07122B]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-[#07122B]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#07122B] text-white text-sm sm:text-base font-medium py-3 sm:py-4 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-5 mt-10">

            {/* Gmail */}
            <a
              href="mailto:mohamedmorny01@gmail.com"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border border-gray-300 text-[#0B132B] hover:bg-[#020308] hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-.97 1.855l-7.5 5.25a2.25 2.25 0 01-2.56 0l-7.5-5.25a2.25 2.25 0 01-.97-1.855V7.5"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-morny/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border border-gray-300 text-[#0B132B] hover:bg-[#020308] hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.879v1.909h.041c.401-.761 1.379-1.562 2.84-1.562 3.039 0 3.6 2 3.6 4.59V22h-3v-7.091c0-1.691-.03-3.869-2.359-3.869-2.36 0-2.721 1.841-2.721 3.75V22h-3V8z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Morny05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border border-gray-300 text-[#0B132B] hover:bg-[#020308] hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.37-1.344-3.37-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
