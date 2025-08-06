import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section id="home" 
        className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent">
                Welcome to my website <span className="text-amber-600">!</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm Adeolu, an entry-level full-stack web developer with a strong passion for frontend development.
                I enjoy crafting intuitive user interfaces and bringing ideas to life through clean, responsive design. 
                As I begin my journey in the tech industry, I’m focused on learning, building, and contributing to meaningful digital experiences.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                    className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-purple-800 transition-colors hover:translate-y-0.5">
                    View Projects
                </a>
                <a href="#contact"
                    className="inline-block px-6 py-3 border border-blue-800 text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white 
                    hover:bg-gradient-to-r from-blue-800 to-purple-500 transition-colors font-medium hover:translate-y-0.5">
                    Contact Me
                </a>
            </div>
            
        </div>
        </RevealOnScroll>
    </section>
  )
}
export default Home