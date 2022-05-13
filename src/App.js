/*

Project : Ecommerce Shop
Use Cases : Sell physical and digital products, Sell Courses
Tools : Material-UI, React, React-Router, Firebase
Author : Rohan Malo - 64rohanmalo@gmail.com

Note : This is the main page, Every component is Imported hare

*/


// Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// Screens
import Home from "./Screens/Home";
import Product from "./Screens/Product";
import Search from "./Screens/Search";
import Cart from "./Screens/Cart";
import Billing from "./Screens/Billing";
import Category from "./Screens/Category";
import Error404 from "./Screens/Error404";
import Profile from "./Screens/Profile";


import { Route, Routes } from "react-router-dom";





function App() {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>


      <Footer />


    </div>
  );
}

export default App;
