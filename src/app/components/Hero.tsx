import React from 'react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 pt-28 gap-14"
    >
      {/* LEFT */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0B132B]">
          Jr DevOps Engineer <br />
          Cloud & Infrastructure
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600">
          Automating infrastructure, optimizing pipelines, and building reliable
          systems.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full text-center hover:bg-[#020308] transition"
          >
            Get in Touch
          </a>

          <a
            href="#projects"
            className="border border-[#0B132B] px-6 py-3 rounded-full text-[#0B132B] hover:bg-[#020308] hover:text-white transition text-center"
          >
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
          {/* Gmail */}
          <a
            href="mailto:mohamedmorny01@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 text-[#0B132B] hover:bg-[#020308] hover:text-white transition"
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
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 text-[#0B132B] hover:bg-[#020308] hover:text-white transition"
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
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 text-[#0B132B] hover:bg-[#020308] hover:text-white transition"
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

      {/* RIGHT */}
      <div className="flex justify-center">
        <img
          src="./Image ODC.jpeg"
          alt="profile"
          className="w-[260px] sm:w-[340px] lg:w-[450px] h-auto object-cover rounded-[40%] shadow-lg"
        />
      </div>
    </section>
  );
}