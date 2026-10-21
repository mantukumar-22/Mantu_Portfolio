


const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Animal Rescue System",
      description:
        "A platform to report injured animals, track rescue locations, and connect users with volunteers.",
      tech: ["Node.js", "Express", "MongoDB"],
      icon: "🐾",
      color: "from-orange-400 to-red-500",
      github: "https://github.com/mantukumar-22/Animal_rescue_system",
      demo: "#",
    },
    {
      id: 2,
      title: "E-commerce_TS",
      description:
        "An online bookstore backend with book management, user authentication, and order APIs.",
      tech: ["React.js", "Node.js", "MongoDB"],
      icon: "📚",
      color: "from-blue-400 to-indigo-600",
      github: "https://github.com/mantukumar-22/ecommerce_TS",
      demo: "#",
    },
    {
      id: 3,
      title: "Banking System",
      description:
        "A banking application featuring account creation, balance checks, and transaction management.",
      tech: ["Node.js", "Express", "MongoDB"],
      icon: "🏦",
      color: "from-emerald-400 to-teal-600",
      github: "https://github.com/mantukumar-22/Banking_System",
      demo: "#",
    },
    {
      id: 4,
      title: "Voting System",
      description:
        "A web application for user registration, candidate management, and online voting.",
      tech: ["React.js", "Node.js", "MongoDB"],
      icon: "🗳️",
      color: "from-purple-400 to-pink-600",
      github: "https://github.com/mantukumar-22/Voting_app",
      demo: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            My Work
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            My <span className="text-blue-600">Projects</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Here are some projects I have worked on using modern web
            technologies and backend development tools.
          </p>
        </div>

        {/* 4 Project Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Card Header */}
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {project.icon}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-600">
                  Project 0{project.id}
                </span>

                <h2 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target={project.demo === "#" ? undefined : "_blank"}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (project.demo === "#") e.preventDefault();
                    }}
                    className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
