

const Skills = () => {
  const skills = [
    {
      name: "C++",
      category: "Programming Language",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "hover:border-blue-400",
    },
    {
      name: "DSA",
      category: "Problem Solving",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg",
      color: "hover:border-green-400",
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "hover:border-yellow-400",
    },
    {
      name: "React.js",
      category: "Frontend Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "hover:border-cyan-400",
    },
    {
      name: "Node.js",
      category: "Backend Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "hover:border-green-500",
    },
    {
      name: "Express.js",
      category: "Backend Framework",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "hover:border-gray-500",
    },
    {
      name: "MongoDB",
      category: "Database",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "hover:border-green-500",
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      color: "hover:border-cyan-400",
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "hover:border-purple-400",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            My Expertise
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            My <span className="text-blue-600">Skills</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Technologies and tools I use to solve problems and build
            modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${skill.color}`}
            >
              {/* Skill Image */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 p-4 transition duration-300 group-hover:scale-110">
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Skill Name */}
              <h2 className="mt-5 text-lg font-bold text-slate-900">
                {skill.name}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {skill.category}
              </p>

              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

        {/* DSA Highlight */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-7 text-white sm:p-10">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Data Structures & Algorithms
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                Practicing problem-solving, arrays, strings, searching,
                sorting, recursion, linked lists, stacks, queues and trees.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl bg-white/15 px-6 py-4 text-center">
              <p className="text-3xl font-extrabold">DSA</p>
              <p className="mt-1 text-sm text-blue-100">Problem Solving</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
