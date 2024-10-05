import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const [smoothies, setSmoothies] = useState([]);
  const [selectedSmoothie, setSelectedSmoothie] = useState(null); // To track the clicked smoothie
  const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/smoothies') 
      .then(response => response.json())
      .then(data => setSmoothies(data))
      .catch(err => console.error(err));
  }, []);

  const handleCardClick = (smoothie) => {
    setSelectedSmoothie(smoothie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSmoothie(null);
  };

  return (
    <div>
      <div className='p-8 grid grid-cols-4 gap-6'>
        {smoothies.map(smoothie => (
          <div 
            key={smoothie.id} 
            className="card w-[15vw] ml-[5em] h-[35vh] bg-white shadow-md rounded-lg p-4 hover:w-[18vw] hover:h-[38vh] duration-100 ease-in-out"
            onClick={() => handleCardClick(smoothie)}
          >
            <img src={smoothie.image} alt={smoothie.name} className="w-full h-[25vh]  object-cover center rounded-t-lg" />
            <h2 className='text-center mt-2'>{smoothie.name}</h2>
            <div className='flex items-center justify-between'>
              <div className="reviews  flex items-center -space-x-2  flex justify-center">
                {smoothie.reviews.map((reviewImage, index) => (
                  <img
                    key={index}
                    src={reviewImage}
                    alt="Review"
                    className="w-8 h-8 relative rounded-full border-2 border-white object-contain"
                    style={{ zIndex: index }}
                  />
                ))}
              </div>
              <FontAwesomeIcon icon={faArrowRight} className='text-pink-700 hover:text-xl'/>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {isModalOpen && selectedSmoothie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[35vw] p-8 rounded-lg">
            <button onClick={closeModal} className="text-gray-500 float-right">X</button>
            <h2 className="text-3xl font-bold mb-4">{selectedSmoothie.name}</h2>
            
            <img src={selectedSmoothie.image} alt={selectedSmoothie.name} className="w-full h-[40vh]  object-cover center rounded-t-lg" />
            <h3 className="text-xl font-semibold">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-4">
              {selectedSmoothie.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold">Recipe:</h3>
            <p>{selectedSmoothie.recipe}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

