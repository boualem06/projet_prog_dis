// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import CarRegistrationForm from './CarRegistrationForm.jsx'
// import CarList from './CarList.jsx'

// function App() {

//   return (
//     <>
//       {/* <CarRegistrationForm/> */}
//       <CarList></CarList>
//     </>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import UpdateCar from './UpdateCar';
import CarRegistrationForm from './CarRegistrationForm.jsx'
import Navbar from './Navbar';



function App() {
  return (
    <Router>
       <Navbar />
        <div className="content">
          <Routes>
              <Route path="/" element={<CarList />} />
              <Route path="/update/:model" element={<UpdateCar />} />
              <Route path="/newcar" element={<CarRegistrationForm />} />
          </Routes>
        </div>
    
    </Router>
  );
}

export default App;
