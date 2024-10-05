import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const [smoothies, setSmoothies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/smoothies') 
      .then(response => response.json())
      .then(data => setSmoothies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='p-8 grid grid-cols-4 gap-6'> {/* Adjust grid for multiple cards */}
      {smoothies.map(smoothie => (
        <div key={smoothie.id} className="card w-[15vw] ml-[5em] h-[35vh] bg-white shadow-md rounded-lg p-4 hover:w-[18vw] hover:h-[38vh] duration-100 ease-in-out">
          <img src={smoothie.image} alt={smoothie.name} className="w-full h-[25vh]  object-cover center rounded-t-lg" />
          <h2 className='text-center mt-2'>{smoothie.name}</h2>
          <div className='flex items-center justify-between'>
            <div className="reviews  flex items-center -space-x-2  flex justify-center">
              {smoothie.reviews.map((reviewImage, index) => (
                <img
                  key={index}
                  src={reviewImage}
                  alt="Review"
                  className="w-8 h-8 rounded-full border-2 border-white object-contain"
                  style={{ zIndex: index }}
                />
              ))}
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='text-pink-700 hover:text-xl'/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
