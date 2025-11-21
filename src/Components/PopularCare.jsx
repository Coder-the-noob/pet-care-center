import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const PopularCare = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the JSON from public folder
    fetch("/petServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl text-center font-bold mb-6 text-gray-800">
        Popular Winter Care Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PopularCare;
