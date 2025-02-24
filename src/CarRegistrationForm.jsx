import React, { useState } from 'react';
import './CarRegistrationForm.css';

function CarRegistrationForm() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    fuelType: '',
    transmission: '',
    seats: '',
    doors: '',
    price: '',
    status: '',
    image: null,  // New field for storing the uploaded image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here (e.g., send the data to a server)
    console.log('Car registered:', formData);
  };

  const imagePreview = formData.image ? URL.createObjectURL(formData.image) : null;

  return (
    <div className="form-container">
      <h1>Register a New Car</h1>
      <form onSubmit={handleSubmit} className="car-form">
        <div className="form-group">
          <label>Make:</label>
          <select name="make" value={formData.make} onChange={handleChange}>
            <option value="">Select Make</option>
            <option value="ford">Ford</option>
            <option value="toyota">Toyota</option>
            <option value="mercedes">Mercedes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Fuel Type:</label>
          <select name="fuelType" value={formData.fuelType} onChange={handleChange}>
            <option value="">Select Fuel Type</option>
            <option value="electric">Electric</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
          </select>
        </div>

        <div className="form-group">
          <label>Transmission:</label>
          <select name="transmission" value={formData.transmission} onChange={handleChange}>
            <option value="">Select Transmission</option>
            <option value="manual">Manual</option>
            <option value="auto">Automatic</option>
          </select>
        </div>

        <div className="form-group">
          <label>Seats:</label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Doors:</label>
          <input
            type="number"
            name="doors"
            value={formData.doors}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="rented">Rented</option>
            <option value="none">None</option>
          </select>
        </div>

        {/* Image upload field */}
        <div className="form-group">
          <label>Car Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview-container">
              <img src={imagePreview} alt="Car Preview" className="image-preview" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">Register Car</button>
      </form>
    </div>
  );
}

export default CarRegistrationForm;
