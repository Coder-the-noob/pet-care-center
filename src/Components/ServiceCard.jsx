import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 
                    transform transition duration-300 hover:shadow-lg hover:-translate-y-2">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3 text-gray-800">
        {service.serviceName}
      </h2>

      <div className="flex items-center gap-1 mt-1 text-yellow-500">
        <FaStar />
        <span className="text-gray-700 font-medium">{service.rating}</span>
      </div>

      <p className="text-gray-800 font-bold mt-2">Price: ${service.price}</p>

      <button
        onClick={openModal}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
      >
        View Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <h2 className="text-xl font-bold mb-4">{service.serviceName}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <p className="text-gray-800 font-bold mb-4">Price: ${service.price}</p>
            <p className="flex items-center gap-1 text-yellow-500 font-medium">
              <FaStar /> {service.rating}
            </p>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
