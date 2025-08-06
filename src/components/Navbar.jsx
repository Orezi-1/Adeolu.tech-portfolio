import { useEffect } from "react";

const Navbar = ({menuOpen, setMenuOpen}) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Function to toggle the mobile menu
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b border-white/10 bg-[#233146] text-white p-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className=" flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold text-white">
              Adeolu <span className="bg-gradient-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent">.tech</span>
            </a>

            <div className="space-x-4 w-7 h-8 relative cursor-pointer z-40 md:hidden "
              onClick={() => setMenuOpen((prev) => !prev)}>
              <span className="text-2xl">&#9776;</span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
    </nav>
  )
}
export default Navbar;