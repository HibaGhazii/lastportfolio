import { useState } from 'react';
import Linkedin from './icons/Linkedin';
import Instagram from './icons/Instagram';
import Facebook from './icons/Facebook';
import { Link } from 'react-scroll';
import Github from './icons/Github';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleChange = (socialMedia) => {
    window.open(socialMedia, '_blank');
  };

  return (
    <nav className="bg-[url('../src/assets/img/banner-bg.png')] md:bg-none shadow-lg shadow-170826 md:shadow-none md:flex md:flex-row md:gap-12 text-center md:justify-end md:py-8 px-4 md:px-0 absolute top-0 left-0 right-0">
      <button onClick={toggleMenu} className="md:hidden text-white flex justify-end">
        <img src="../assets/img/MenuIcon.svg" className="w-8 mt-3 mb-2" alt="Menu" />
      </button>

      <div className={`md:flex md:flex-row md:gap-12 text-left md:text-center md:justify-end md:py-10 px-4 md:px-28 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <h3 className="text-xl text-white cursor-pointer hover:bg-fuchsia-700/30 md:hover:bg-transparent hover:rounded-lg">
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
          <hr className='md:hidden'/>
        </h3>
        <h3 className="text-xl text-white cursor-pointer hover:bg-fuchsia-700/30 md:hover:bg-transparent hover:rounded-lg">
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
          <hr className='md:hidden'/>
        </h3>
        <h3 className="text-xl text-white cursor-pointer hover:bg-fuchsia-700/30 md:hover:bg-transparent hover:rounded-lg">
          <Link to="Projects" smooth={true} duration={500}>
            Projects
          </Link>
          <hr className='md:hidden'/>
        </h3>

        <div className="my-3 md:mt-0 flex flex-row justify-between gap-2 mb-1">
          <Link to="Message" smooth={true} duration={500}>
            <button className="md:hidden text-white font-bold border border-white h-10 px-2 rounded-lg hover:bg-fuchsia-700/30 md:hover:bg-transparent ">Let's Connect</button>
          </Link>

          <button onClick={() => handleChange('https://www.facebook.com/hiba.ghazi.395')}>
            <Facebook />
          </button>

          <button onClick={() => handleChange('https://www.linkedin.com/in/hiba-ghazi-a72333289/')}>
            <Linkedin />
          </button>

          <button onClick={() => handleChange('https://www.instagram.com/hibaaa_gh/?hl=fr')}>
            <Instagram />
          </button>

          <button onClick={() => handleChange('https://github.com/HibaGhz')}>
            <Github />
          </button>
        </div>

        <Link to="Message" smooth={true} duration={500}>
          <button className="hidden md:block md:text-white md:font-bold md:border md:border-white md:h-10 md:px-2 rounded-lg">Let's Connect</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;