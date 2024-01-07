import React, { useState } from 'react';
import todolist from '../assets/realisations/web/todolist.PNG';
import rockPaperScissorsPlaceholder from '../assets/realisations/web/rock-paper-scissors-placeholder.PNG';
import rockPaperScissors from '../assets/realisations/web/rock-paper-scissor.PNG';
import react from '../assets/realisations/web/react/add.PNG';
import reactPlaceholder from '../assets/realisations/web/react/placeholder.PNG';
import reactTodolist from '../assets/realisations/web/react/todolist.PNG';
import jsonBlogs from '../assets/realisations/web/JSON/blogs.PNG';
import jsonCreate from '../assets/realisations/web/JSON/create.PNG';
import sonatrach from '../assets/realisations/web/sonatrach/sonatrach.PNG';
import sonatrachPlaceholder from '../assets/realisations/web/sonatrach/2.PNG'
import infrarail from '../assets/realisations/web/infrarail/infrarail1.PNG'
import infrarailPlaceholder from '../assets/realisations/web/infrarail/placeholder.PNG'
import mezghena from '../assets/realisations/web/mezghena/mezghena.png'
import mezghenaPlaceholder from '../assets/realisations/web/mezghena/mezghena-placeholder.png'
import amazon from '../assets/realisations/e-commerce/amazon/amazon.PNG'
import amazonPlaceholder from '../assets/realisations/e-commerce/amazon/index.PNG'
import shop from '../assets/realisations/e-commerce/amazon/amazon.PNG'
import shopPlaceholder from '../assets/realisations/e-commerce/ecom-python/placeholder.PNG'
import figma from '../assets/realisations/design/portfolio-figma/portfolio.PNG'
import figmaPlaceholder from '../assets/realisations/design/portfolio-figma/placeholder.PNG'
import canva from '../assets/realisations/design/portfolio-canva/portfolio-canva.PNG'
import canvaPlaceholder from '../assets/realisations/design/portfolio-canva/2.PNG'


const Modal = ({ closeModal, imageURL, description}) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-screen flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md overflow-y-auto">
      <div className="relative md:w-full max-w-3xl mx-auto my-auto">
        <div className="flex flex-col md:flex-row">
          
          <div className="flex flex-col md:w-1/2 ">
            <img src={process.env.PUBLIC_URL + imageURL} alt="Project" className="w-full h-full rounded-lg" />
          </div>

          <div className="md:w-1/2 p-5 md:p-[100px]">
            <p className="text-xl font-bold mb-4">Project Description:</p>
            <p>{description}</p>
          </div>
        </div>

        <button onClick={closeModal} className="absolute top-0 right-0 text-55106D text-2xl cursor-pointer">
          &times;
        </button>
      </div>
    </div>

  );
}



const Projects = () => {
  
  const PhotosWeb = [
    {
      image: todolist,
      placeholderImage: todolist,
      description:"The website provides a list of tasks to be accomplished with specific deadlines, allowing users to add their own tasks. Developed with HTML, CSS, and JavaScript"
    },
    {
      image:rockPaperScissors,
      placeholderImage:rockPaperScissorsPlaceholder,
      description:"The website offers a rock-paper-scissors game to play against the computer with an automatic reading function. Developed with HTML, CSS, and JavaScript"
    },
    {
      image:react,
      placeholderImage:reactPlaceholder,
      description:"A dynamic blog website that allows users to easily create, edit, view details, and delete blogs. Developed with React JS, HTML, Tailwind, and JSON Server."
    },
    {
      image: reactTodolist,
      placeholderImage: reactTodolist,
      description:"The interface provides a list of tasks to accomplish, allowing users to add their own tasks. Developed with React JS and Tailwind"
    },
    {
      image: jsonBlogs,
      placeholderImage:jsonCreate,
      description:"A dynamic blog website that allows users to easily create, edit, view details, and delete blogs. Developed with HTML, Tailwind, JavaScript, and JSON Server."
    },
    {
      image:sonatrach,
      placeholderImage:sonatrachPlaceholder,
      description:"Design and implementation of a Geographic Information System (GIS) for the management of exploration perimeters. Developed with HTML, CSS, Bootstrap, JavaScript, PHP, Laravel, Leaflet, and HeidiSQL."
    },
    {
      image:infrarail,
      placeholderImage: infrarailPlaceholder,
      description:"Dynamic website for a railway company. Developed with HTML/CSS, Bootstrap, JavaScript, PHP, and MySQL."
    },
    {
      image:mezghena,
      placeholderImage:mezghenaPlaceholder,
      description:"Dynamic website for a company. Developed with React.js, Tailwind, and Flowbite (the suite is currently being implemented with Node.js, Express.js, and MySQL)."
    },
  ];

  const PhotosEcommerce = [
    {
      image:amazon,
      placeholderImage:amazonPlaceholder,
      description:"E-commerce website for buying and selling clothes with an Amazon design. Developed with Python, Django, Bootstrap, HTML, and JavaScript."
    },
    {
      image:shop,
      placeholderImage:shopPlaceholder,
      description:"E-commerce website for buying and selling clothes. Developed with Python, Django, Bootstrap, HTML, and JavaScript."
    },
  ];

  const PhotosDesign = [
    {
      image:figma,
      placeholderImage:figmaPlaceholder,
      description:"This design showcases my skills, projects, achievements, and expertise in the field of web development. Created with Figma."
    },{
      image:canva,
      placeholderImage:canvaPlaceholder,
      description:"This design highlights my skills, projects, achievements, and expertise in the field of web development. Created with Canva."
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Web');

  const [selectedImage, setSelectedImage] = useState(null);

  if(selectedImage) {
    document.body.classList.add('active-modal')
  } else {
      document.body.classList.remove('active-modal')
  } 

  const openModal = (imageURL) => {
    setSelectedImage(imageURL);
  }

  const closeModal = (imageURL) => {
    setSelectedImage(null);
  }

  const renderPhotoGallery = () => {
    let photos = [];

    switch (selectedCategory) {
      case 'Web':
        photos = PhotosWeb;
        break;
      case 'E-commerce website':
        photos = PhotosEcommerce;
        break;
      case 'Design':
        photos = PhotosDesign;
        break;
      default:
        break;
    }

    return (
      <div className='flex justify-center'>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-4 mt-10">
          {photos.map((link, index) => (
            <div key={index} className="relative">
              
              <img
                src={selectedImage === link ? (process.env.PUBLIC_URL + link.image) : link.placeholderImage}
                alt="Project"
                onClick={() => openModal(link)}
                className="md:w-[300px] md:h-[140px] w-[200px] h-[100px] rounded-[40px] transition-opacity ease-in-out duration-300"
              />

              {selectedImage !== link && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[40px]">
                  <button onClick={()=> openModal(link)} className="text-white">Click to view</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id='Projects' className="text-white text-center mt-16">
      <p className="text-2xl font-bold mb-3">Projects</p>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => setSelectedCategory('Web')}
          className={`border border-white px-6 py-2 md:px-16 md:py-2 rounded-l-[20px] ${
            selectedCategory === 'Web' ? 'bg-gradient-to-r from-fuchsia-500 to-55106D' : ''
          }`}>Web
        </button>


        <button
          onClick={() => setSelectedCategory('E-commerce website')}
          className={`border border-white px-6 md:px-12 md:py-2 ${
            selectedCategory === 'E-commerce website' ? ' bg-gradient-to-r from-fuchsia-500 to-55106D' : ''
          }`}>E-commerce website
        </button>


        <button
          onClick={() => setSelectedCategory('Design')}
          className={`border border-white px-6 md:px-12 md:py-2 rounded-r-[20px] ${
            selectedCategory === 'Design' ? 'bg-gradient-to-r from-fuchsia-500 to-55106D' : ''
          }`}>Design
        </button>


      </div>
      {renderPhotoGallery()}
      {selectedImage && (
        <Modal closeModal={closeModal}  imageURL={selectedImage.image} description={selectedImage.description} />
      )}
    </div>
  );
};

export default Projects;