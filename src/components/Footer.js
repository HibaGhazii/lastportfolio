import Linkedin from './icons/Linkedin';
import Instagram from './icons/Instagram';
import Facebook from './icons/Facebook';
import CV from './CV';
import Github from './icons/Github';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {

  const handleChange = (socialMedia) => {
    window.open(socialMedia, '_blank');
  };

  
  return (
    
    <div className="bg-[url('../src/assets/img/footer-bg.png')]">
     
      <div>
        <CV/>
      </div>

      <div className="flex flex-col px-12 pt-10 pb-6 ">
      
        <div className='flex flex-row justify-start gap-2'>
          
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
        <p className='text-white flex justify-start my-1'>© 2023. All Rights Reserved  </p>
      </div>
      <ScrollToTop smooth width='' color='purple'/>
    </div>
  );
};

export default Footer;