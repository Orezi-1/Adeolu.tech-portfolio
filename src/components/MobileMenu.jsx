import { useEffect } from "react";


const MobileMenu = ({menuOpen, setMenuOpen}) => {
  
    // Function to toggle the mobile menu
    return (
        <>
        {menuOpen && (
          <div className={`fixed top-0 left-0 w-full bg-gray-900 z-40 flex items-center justify-center
  transition-all duration-300 ease-in-out
  ${menuOpen ? 'h-1/3 opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none hidden'}`}>
        
            <button onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label='Close menu'>
                &times; {/* Close icon */}
            </button>

            <div className="flex flex-col justify-center items-center text-2xl mt-5 space-y-6 font-semibold text-white">
                <a href="#home" className={`text-gray-300 hover:text-white transform transition-transform duration-300
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    onClick={() => setMenuOpen(false)}>
                    Home
                </a> 
                <a href="#about" className={`text-gray-300 hover:text-white transform transition-transform duration-300
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    onClick={() => setMenuOpen(false)}>
                    About
                </a> 
                <a href="#projects" className={`text-gray-300 hover:text-white transform transition-transform duration-300
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    onClick={() => setMenuOpen(false)}>
                    Projects
                </a>
                <a href="#contact" className={`text-gray-300 hover:text-white transform transition-transform duration-300
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
            </div>
          </div>
        )}
        </>
    );
}
export default MobileMenu;