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
      description:"Le site offre une liste de tâches à accomplir avec une date précise, permettant aux utilisateurs d'ajouter leurs propres tâches Développé avec : HTML,CSS et Javascipt"
    },
    {
      image:rockPaperScissors,
      placeholderImage:rockPaperScissorsPlaceholder,
      description:"Site qui propose un jeu de pierre-papier-ciseaux à jouer contre l'ordinateur avec fonction de lecture automatique. Développé avec : HTML,CSS et Javascipt"
    },
    {
      image:react,
      placeholderImage:reactPlaceholder,
      description:"Un site de Blogs dynamique, il offre la possibilité de créer, modifier, consulter les détails et supprimer les blogs en toute simplicité. Développé avec : React JS, HTML, Tailwind And JSON Server"
    },
    {
      image: reactTodolist,
      placeholderImage: reactTodolist,
      description:"L'interface offre une liste de tâches à accomplir, permettant aux utilisateurs d'ajouter leurs propres tâches Développé avec : React JS et Tailwind"
    },
    {
      image: jsonBlogs,
      placeholderImage:jsonCreate,
      description:"Un site de Blogs dynamique, il offre la possibilité de créer, modifier, consulter les détails et supprimer les blogs en toute simplicité. Développé avec : HTML, Tailwind, Javascript with JSON Server"
    },
    {
      image:sonatrach,
      placeholderImage:sonatrachPlaceholder,
      description:"Conception et réalisation d'un Système d'information Géographique(SIG) pour la gestion des périmètres d'exploration. Développé avec : HTML,CSS, Bootstrap, Javascipt, PHP, Laravel, leaflet, HeidiSQL,"
    },
    {
      image:infrarail,
      placeholderImage: infrarailPlaceholder,
      description:"Site dynamique pour une entreprise ferroviaire. Développé avec : HTML/CSS, Booststrap, Javascipt, PHP, MySql"
    },
    {
      image:mezghena,
      placeholderImage:mezghenaPlaceholder,
      description:"Site dynamique pour une entreprise. Développé avec : React js, Tailwind, Flowbite (la suite est en cours de réalisation avec Node Js, Express Js et MysQL)"
    },
  ];

  const PhotosEcommerce = [
    {
      image:amazon,
      placeholderImage:amazonPlaceholder,
      description:"Site vente et achat des vêtements (Amazon design). Développé avec : Python, Django, Bootstrap, HTML, JavaScript"
    },
    {
      image:shop,
      placeholderImage:shopPlaceholder,
      description:"Site vente et achat des vêtements (e-commerce). Développé avec : Python, Django, Bootstrap, HTML, JavaScript"
    },
  ];

  const PhotosDesign = [
    {
      image:figma,
      placeholderImage:figmaPlaceholder,
      description:"Ce design expose mes compétences, mes projets, mes réalisations et mon expertise dans le domaine du développement web .Fait avec: Figma "
    },{
      image:canva,
      placeholderImage:canvaPlaceholder,
      description:"Ce design expose mes compétences, mes projets, mes réalisations et mon expertise dans le domaine du développement web .Fait avec: Canva"
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