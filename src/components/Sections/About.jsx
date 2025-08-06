import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",    
    "Tailwind CSS",
    "GitHub",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
  ];

  return (
    <section 
      id="about"
      className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 py-25">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-800
         to-purple-500 bg-clip-text text-transparent">
          About Adeolu
        </h2>

        <div className="rounded-xl p-6 border-amber-500 border hover:-translate-y-1 transition-all">
          <p className="text-lg text-gray-300 text-center">
            &#128075; not your typical tech bro. Started off in building tech, dabbled in e-commerce,
            & now I'm diving headfirst into web dev. I'm learning the ropes of full-stack dev, but frontend is where I shine. 
            Still new, still hungry, & building every day.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4 hover:-translate-y-1 transition-all hover:bg-gradient-to-r
             hover:from-blue-800 hover:to-purple-500 hover:text-white">
              <h3 className="text-2xl font-semibold mb-4 text-left">
                Frontend Skills
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {frontendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium hover:bg-amber-600
                     hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 hover:-translate-y-1 transition-all hover:bg-gradient-to-r hover:from-blue-800
             hover:to-purple-500 hover:text-white">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Backend Skills
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {backendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium hover:bg-amber-600
                     hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="mb-2">
                <strong>Building Technology</strong> - Obafemi Awolowo University, 2023
              </li>
              <li className="mb-2">
                <strong>Full Stack Web Development Bootcamp </strong> - CODAR Tech. Africa, 2025
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4>
                  <strong>Technical Team Lead</strong> - Accrue Systems Venture (2021 - Present)
                </h4>
                <p>
                  Oversaw façade maintenance as Technical Team Lead on high-profile building projects in Lagos, 
                  contributing to structural safety and aesthetic excellence.
                </p>
              </div>
              <div>
                <h4>
                  <strong>Full Stack Developer Intern</strong> - CODAR Tech. Africa, 2025
                </h4>
                <p>
                  Completed my developers's training here. Developed and maintained web applications using React, Node.js, and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}
export default About