import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, hasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        hasScrolled(true);
      }
      else {
        hasScrolled(false);
      }
    }

    console.log("useEffect");
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll) };
  }, []);

  return (
    <nav className={"transition-all duration-500 sticky z-10 bg-white " + (scrolled ? 'drop-shadow-lg rounded-full mx-5 top-2' : 'top-0')}>
      <ul className="flex px-7 py-5 space-x-5">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Navbar