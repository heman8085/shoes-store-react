import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";
import AdminForm from "./components/pages/form/AdminForm";
import ShoesList from "./components/pages/list/ShoesList";
import ShoesCart from "./components/pages/cart/ShoesCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/navbar/Navbar";

const App = () => {
  const [shopModal, setShopModal] = useState(false);

  const showModalHandler = () => {
    setShopModal(true);
  };
  const hideModalHandler = () => {
    setShopModal(false);
  };
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<ShoesList showModalHandler={showModalHandler} />} />
          <Route path="/cart" element={<ShoesCart />} />
        </Routes>
        {shopModal && (
          <Modal>
            <AdminForm hideModalHandler={hideModalHandler} />
          </Modal>
        )}
      </div>
    </Router>
  );
};

export default App;
