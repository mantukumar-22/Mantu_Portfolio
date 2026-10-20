
import { Link } from "react-router-dom";

const Home = () => {
  const skills = ["React.js", "Node.js", "Express.js", "MongoDB"];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-24 lg:px-10">

        {/* Left Content */}
        <div className="w-full text-center md:w-3/5 md:text-left">
          <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            👋 Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-blue-600">Mantu Kumar</span>
          </h1>

          {/* Animated Role */}
          <h2 className="mt-4 text-2xl font-bold text-slate-700 sm:text-3xl">
            <span className="inline-block animate-fade-in-up">
              Full Stack{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Engineer
              </span>
            </span>
          </h2>

          {/* Problem Solving Text */}
          <p className="mt-3 animate-pulse text-lg font-semibold text-slate-600">
            <span className="text-blue-600">⚡</span> Problem Solver
            <span className="mx-2 text-slate-400">|</span>
            <span className="text-indigo-600">💻</span> Web Developer
          </p>

          {/* Open to Work Badge */}
          <div className="mt-5 flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              Open to Work · Full Stack Engineer
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 md:mx-0 md:text-lg">
            I build responsive websites and scalable backend applications
            using React.js, Node.js, Express.js and MongoDB. I enjoy solving
            problems and turning ideas into real-world projects.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/project"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              View Projects →
            </Link>

            <Link
              to="/about"
              className="rounded-xl border-2 border-slate-300 px-7 py-3 font-semibold text-slate-700 transition duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              About Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold text-slate-600 md:justify-start">
            <a
              href="https://github.com/mantukumar-22"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-600"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mantu-kumar321/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-600"
            >
              LinkedIn ↗
            </a>

            <a
              href="mantu8797kumar@gmail.com"
              className="transition hover:text-blue-600"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="flex w-full justify-center md:w-2/5">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-300 to-indigo-300 opacity-40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white p-8 text-center shadow-2xl">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-6xl font-extrabold text-white ring-8 ring-blue-50">
                M
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Mantu Kumar
              </h3>

              <p className="mt-2 text-slate-500">
                Full Stack Developer
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-emerald-600">
                  ● Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Skills Section */}
      <section className="border-t border-slate-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            My Tech Stack
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Technologies I Work With
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git & GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* About */}
            <div>
              <h2 className="text-2xl font-extrabold">
                Mantu<span className="text-blue-400">.</span>
              </h2>

              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                Full Stack Developer passionate about building responsive
                websites and scalable web applications using modern
                technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <Link to="/" className="transition hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="transition hover:text-blue-400">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="/skill" className="transition hover:text-blue-400">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/project" className="transition hover:text-blue-400">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold">Connect With Me</h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/YOUR_USERNAME/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:your-email@example.com"
                    className="transition hover:text-blue-400"
                  >
                    Email Me ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold">Contact</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Have a project idea or job opportunity? Feel free to contact
                me. Let's build something amazing together!
              </p>

              <a
                href="mailto:your-email@example.com"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Let's Talk →
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-slate-700 pt-6 text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Mantu Kumar. All rights reserved.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Designed & Built with ❤️ using React.js and Tailwind CSS
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
};

export default Home;
