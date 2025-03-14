import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarList.css'; // Import the CSS for styling

const CarList = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  // Fetch car data (you can replace this with your actual fetch request)
  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:5000/cars'); // Adjust the URL if needed
      const carData = await response.json();
      setCars(carData);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleUpdate = (car) => {
    navigate(`/update/${car.model}`, { state: car });
  };

  const handleDelete = async (car) => {
    if (window.confirm(`Are you sure you want to delete the ${car.make} ${car.model}?`)) {
      try {
        // Sending DELETE request to the backend
        const response = await fetch(`http://localhost:5000/cars/${car._id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // If successful, remove the car from the list in the frontend
          setCars(cars.filter((c) => c._id !== car._id));
          alert("Car deleted successfully");
        } else {
          const result = await response.json();
          alert(`Error: ${result.error}`);
        }
      } catch (error) {
        console.error("Error deleting car:", error);
        alert("Failed to delete the car");
      }
    }
  };
  

  useEffect(() => {
    fetchCars(); // Fetch car data when the component mounts
  }, []);

  return (
    <div className="car-list-container">
      <h1>Available Cars</h1>
      <div className="car-cards-container">
        {cars.map((car) => (
          <div key={car._id} className={`car-card ${car.status.toLowerCase()}`}>
            <div className="car-image-container">
              {/* Use the first image in the 'images' array */}
              <img src={car.images[0]} alt={`${car.make} ${car.model}`} className="car-image" />
              <div className={`car-status-overlay ${car.status.toLowerCase()}`}>
                <span>{car.status}</span>
              </div>
            </div>
            <div className="car-info">
              <div className="left-info">
                <h3>{car.make} {car.model}</h3>
                <p className="price">${car.price}</p>
              </div>
              <div className="right-info">
                <div className="car-buttons">
                  <button onClick={() => handleUpdate(car)} className="update-button">Update</button>
                  <button onClick={() => handleDelete(car)} className="delete-button">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;

