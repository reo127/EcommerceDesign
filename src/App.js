/*
Project : Ecommerce Shop
Tools : Material-UI, React, React-Router, Firebase
Auhtor : Rohan Malo - 64rohanmalo@gmail.com

Note : This is the main page, Every component is Imported hare
*/


import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Product from "./Screens/Product";

import { Route, Routes } from "react-router-dom";




function App() {
  return (
    <div>
      <Navbar />


      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pro" element={<Product />} />
      </Routes>


      <Footer />


    </div>
  );
}

export default App;
