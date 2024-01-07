import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

const Skills = () => {
 return (
    <div id='Skills' className="md:-translate-y-[100px] -translate-y-16 bg-161616 text-white text-center py-10 px-12 lg:mx-40 md:mx-20 rounded-[100px]">
      <div className='mb-4 md:mb-0'>
        <p className='text-2xl font-bold mb-3'>Skills</p>
        {/* <p className='mx-28'>En tant que développeuse, je possède les compétences suivantes : </p> */}
        <p>→ Proficiency in languages such as JavaScript, HTML, CSS, and PHP</p>
        <p>→ Practical experience with frameworks like React js</p>
        <p>→ Design and management of SQL and NoSQL databases.</p>
        <p>→ Regular use of development tools such as Git and npm.</p>
        <p>→ UI/UX Design skills for creating user experiences</p>
       
      </div>
      <div className='hidden md:inline-flex md:flex-row md:justify-between md:mt-12 mx-12 md:gap-6 lg:gap-28'>
        <div >
          <img src={meter1} className='md:h-32 md:pb-2' alt="Web Design" />
          <p className=''>Web Design</p>
        </div>

        <div className=''>
          <img src={meter2} className='md:h-32 md:pb-2' alt="UI/UX Design" />
          <p className=''>UI/UX Design</p>
        </div>

        <div className=''>
          <img src={meter3} className='md:h-32 md:pb-2' alt="Web Development" />
          <p className=''>Web Development</p>
        </div>
        {/* <p className=' bg-55106D p-2 rounded-full'>HTML</p>
        <p className=' bg-55106D p-2 rounded-full'>CSS</p>
        <p className=' bg-55106D p-2 rounded-full'>Javascript</p>
        <p className=' bg-55106D p-2 rounded-full'>jQuery</p>
        <p className=' bg-55106D p-2 rounded-full'>PHP</p>
        <p className=' bg-55106D p-2 rounded-full'>MySQL</p>
        <p className=' bg-55106D p-2 rounded-full'>Wordpress</p>
        <p className=' bg-55106D p-2 rounded-full'>React JS</p>
        <p className=' bg-55106D p-2 rounded-full'>Tailwind</p>
        <p className=' bg-55106D p-2 rounded-full'>C++</p>
        <p className=' bg-55106D px-4 py-2 rounded-2xl'>C.</p>
      </div>
      <p className='text-2xl font-bold mt-8'>Outils</p>
      <p className='mx-40'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
      <div className='flex flex-row justify-between mt-12'>
        <p className=' bg-55106D p-2 rounded-full'>Git</p>
        <p className=' bg-55106D p-2 rounded-full'>GitHub</p>
        <p className=' bg-55106D p-2 rounded-full'>Windows</p>
        <p className=' bg-55106D p-2 rounded-full'>Linux</p>

        <p className=' bg-55106D p-2 rounded-full'>MS Office</p>
        <p className=' bg-55106D p-2 rounded-full'>Libre Office</p>

        <p className=' bg-55106D p-2 rounded-full'>Figma (UI/UX)</p>
        <p className=' bg-55106D p-2 rounded-full'>Canva</p>
        */}
      </div> 
    </div>
 );
}

export default Skills;