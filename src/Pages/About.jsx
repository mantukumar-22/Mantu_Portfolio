
import { Link } from "react-router-dom";

const About = () => {
  const details = [
    { title: "Name", value: "Mantu Kumar" },
    { title: "Role", value: "Full Stack Developer" },
    { title: "Frontend", value: "React.js, Tailwind CSS" },
    { title: "Backend", value: "Node.js, Express.js" },
    { title: "Database", value: "MongoDB" },
    { title: "Tools", value: "Git, GitHub, Postman" },
  ];

  const interests = [
    "Web Development",
    "REST APIs",
    "Database Design",
    "Problem Solving",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Get To Know Me
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            About <span className="text-blue-600">Me</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Learn more about my journey, technical skills, and passion for
            building useful web applications.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Profile Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-xl" />

            <div className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-xl sm:p-10">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-6xl font-extrabold text-white ring-8 ring-blue-50">
                M
              </div>

              <h2 className="mt-7 text-center text-2xl font-bold text-slate-900">
                Mantu Kumar
              </h2>

              <p className="mt-2 text-center font-medium text-blue-600">
                Full Stack Developer
              </p>

              <p className="mt-5 text-center leading-7 text-slate-600">
                Passionate about developing clean, responsive interfaces
                and reliable backend systems.
              </p>

              <div className="mt-7 flex justify-center gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right About Details */}
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900">
              Building Digital Experiences with
              <span className="text-blue-600"> Code & Creativity</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Hello! I'm Mantu Kumar, a developer interested in building
              modern web applications. I work with React.js to create
              responsive user interfaces and Node.js, Express.js, and MongoDB
              to develop backend functionality.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              I enjoy learning new technologies, solving coding challenges,
              designing REST APIs, and developing projects that solve
              real-world problems. My goal is to keep improving my skills
              and contribute to meaningful software projects.
            </p>

            {/* Details */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>
                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Interests */}
            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Areas of Interest
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Contact Button */}
            <Link
              to="/project"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore My Projects <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

