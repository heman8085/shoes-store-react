import React, { useState } from "react";
import "./App.css";
import AdminForm from "./components/pages/form/adminForm";
import Modal from "./components/modal/Modal";

const App = () => {
  const [shopModal, setShopModal] = useState(false);
  const showModalHandler = () => {
    setShopModal(true);
  }
  const hideModalHandler = () => {
    setShopModal(false);
  }
  return (
    <div className="App">
      <h1>Shoes shop</h1>
      <button onClick={showModalHandler}>Add Shoes</button>
      {shopModal && <Modal>
        <AdminForm hideModalHandler={hideModalHandler} />
      </Modal>}
    </div>
  );
};

export default App;
