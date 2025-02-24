import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UpdateCar.css';

const UpdateCar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [car, setCar] = useState(location.state || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleUpdateCar = (e) => {
    e.preventDefault();
    // Here, you would typically update the car in a global state or API call
    console.log('Updated car:', car);
    // Navigate back to the car list page after update
    navigate('/');
  };

  return (
    <div className="update-car-container">
      <h2>Update Car Details</h2>
      <form onSubmit={handleUpdateCar}>
        <label>
          Make:
          <input type="text" name="make" value={car.make} onChange={handleInputChange} required />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={car.model} onChange={handleInputChange} required />
        </label>
        <label>
          Year:
          <input type="number" name="year" value={car.year} onChange={handleInputChange} required />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={car.color} onChange={handleInputChange} required />
        </label>
        <label>
          Fuel Type:
          <select name="fuelType" value={car.fuelType} onChange={handleInputChange} required>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Transmission:
          <select name="transmission" value={car.transmission} onChange={handleInputChange} required>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </label>
        <label>
          Seats:
          <input type="number" name="seats" value={car.seats} onChange={handleInputChange} required />
        </label>
        <label>
          Doors:
          <input type="number" name="doors" value={car.doors} onChange={handleInputChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={car.price} onChange={handleInputChange} required />
        </label>
        <label>
          Status:
          <select name="status" value={car.status} onChange={handleInputChange} required>
            <option value="Available">Available</option>
            <option value="Rented">Rented</option>
          </select>
        </label>
        <button type="submit" className="update-button">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateCar;
