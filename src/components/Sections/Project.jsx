import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  return (
    <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-10"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-800
                to-purple-500 bg-clip-text text-transparent">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border-white/10 border shadow-md hover:shadow-lg
                  hover:-translate-y-1 transition-all hover:border-amber-500/30">
                    <h2 className="text-2xl font-semibold mb-2 text-left">
                      Movie Site
                    </h2>
                    <p className="text-gray-400 mb-4 ">
                      API generated site. Designed to show the latest and trending movies and for any movie search
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "Fetch API","Vite"].map((tech, key) => {
                          return (
                            <span
                              key={key}
                              className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium
                               hover:bg-amber-600 hover:text-white transition-colors mr-2 mb-2"
                            >
                              {tech}
                            </span>
                          );
                        })}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a href="https://movie-site-six-sage.vercel.app/"
                          className="text-blue-400 hover:text-blue-600 transition-colors font-medium">
                          Click to View Project 
                        </a>
                    </div>
                </div>
                <div className="p-5 rounded-xl border-white/10 border shadow-md hover:shadow-lg
                  hover:-translate-y-1 transition-all hover:border-amber-500/30">
                    <h2 className="text-2xl font-semibold mb-2 text-left">
                      My Codar Project
                    </h2>
                    <p className="text-gray-400 mb-4 ">
                      This is a project I built during my time at Codar. It showcases my skills in frontend web development and design.
                    </p>
                    <div>
                        {["React", "Node.js", "Tailwind CSS","Vite"].map((tech, key) => {
                          return (
                            <span
                              key={key}
                              className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium
                               hover:bg-amber-600 hover:text-white transition-colors mr-2 mb-2"
                            >
                              {tech}
                            </span>
                          );
                        })}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a href="https://my-codar-project.vercel.app/"
                          className="text-blue-400 hover:text-blue-600 transition-colors font-medium">
                          Click to View Project 
                        </a>
                    </div>
                </div>
                <div className="p-5 rounded-xl border-white/10 border shadow-md hover:shadow-lg
                  hover:-translate-y-1 transition-all hover:border-amber-500/30">
                    <h2 className="text-2xl font-semibold mb-2 text-left">
                      E-commerce landing Page
                    </h2>
                    <p className="text-gray-400 mb-4 ">
                      A simple e-commerce landing page built with React and Vite using Lovable AI and 
                      powered by GPT Engineer technology. It highlights products and enables users to 
                      browse and explore items seamlessly.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "TypeScript", "shadcn-ui","Tailwind CSS","Vite"].map((tech, key) => {
                          return (
                            <span
                              key={key}
                              className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium
                               hover:bg-amber-600 hover:text-white transition-colors mr-2 mb-2"
                            >
                              {tech}
                            </span>
                          );
                        })}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a href="https://gptengineer.app/projects/c266ceae-eac0-4104-a2f0-bf614d192f28/improve"
                          className="text-blue-400 hover:text-blue-600 transition-colors font-medium">
                          Click to View Project 
                        </a>
                    </div>
                </div>
                <div className="p-5 rounded-xl border-white/10 border shadow-md hover:shadow-lg
                  hover:-translate-y-1 transition-all hover:border-amber-500/30">
                    <h2 className="text-2xl font-semibold mb-2 text-left">
                      My Portfolio
                    </h2>
                    <p className="text-gray-400 mb-4 ">
                      This a personal portfolio website showcasing my skills, projects, and experience.
                      It serves as a platform to highlight my work and connect with potential clients or employers.
                    </p>
                    <div>
                        {["React", "Node.js", "Tailwind CSS","Vite"].map((tech, key) => {
                          return (
                            <span
                              key={key}
                              className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium
                               hover:bg-amber-600 hover:text-white transition-colors mr-2 mb-2"
                            >
                              {tech}
                            </span>
                          );
                        })}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a href="#"
                          className="text-blue-400 hover:text-blue-600 transition-colors font-medium">
                          Click to View Project 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}
export default Project