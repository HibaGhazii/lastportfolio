import React from 'react';
import cv from '../assets/Cv/CV-GHAZI-HIBA.pdf';
const CV = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href =  cv;
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div className='text-white transform -translate-y-1/2 md:mx-64 mx-14 text-center bg-161616 rounded-full shadow-md shadow-fuchsia-400'>
      <button onClick={downloadCV} className="md:px-36 py-3 md:py-6 md:text-2xl font-bold">
        Download my Curriculum Vitae
      </button>
    </div>
  );
};

export default CV;