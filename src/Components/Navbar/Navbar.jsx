import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // const [Name,setName] = useState(localStorage.getItem("name"))
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 border-b-2">
      <nav
        className={`py-4 md:px-8 px-6 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
          }`}
      >
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl cursor-pointer text-black">
            <a href="/">
              <img
              // src=""
              // alt=""
              // width="45"
              // height="45"
              />Moodytales
            </a>
          </div>

          <div className="lg:flex items-center gap-3 hidden text-stone-700">
            <a
              href="#Home"
              className="block hover:text-pink-800 py-2 px-4 cursor-pointer"
            >
              Home
            </a>


            <a
              href="#Books"
              className="block hover:text-pink-800 py-2 px-4 cursor-pointer"
            >
              Books
            </a>
            <a
              className="block hover:text-pink-800 py-2 px-4 cursor-pointer" href="#About">
              About
            </a>
            <a
              href="#Services"
              className="block hover:text-pink-800 py-2 px-4 cursor-pointer"
            >
              Services
            </a>
          </div>

          <div className="flex items-center lg:order-2">
           
            <Link to="Login" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
             
                Log in
                {/* <button class="bg-purple-900 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Login</button> */}
  
            </Link>
            <Link
              to="Signup"
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
            >
              Sign up
            </Link>

          </div>
 


          <button onClick={toggleMenu} className="lg:hidden text-pink-700 text-3xl">
            <HiMenu />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 bg-pink-700 text-black rounded">
            <a
              href="/"
              className="block hover:text-pink-800 py-2 px-4"
            >
              Home
            </a>
            <a
              href="/"
              className="block hover:text-pink-800 py-2 px-4"
            >
              About
            </a>
            <a
              href="/"
              className="block hover:text-pink-800 py-2 px-4"
            >
              Catalogue
            </a>
            <a
              href="/"
              className="block hover:text-pink-800 py-2 px-4"
            >
              Services
            </a>
          </div>
        )}
      </nav>
      {/* <li className="nav-item">
        <Link onClick={props.login}>Login</Link>
      </li> */}
    </header>
  );
}

// export default Navbar;