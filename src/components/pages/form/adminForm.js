import React, { useState } from "react";

const AdminForm = () => {

  const [quantities, setQuantities] = useState({
    S: "",
    M: "",
    L: "",
  });

  const handleQuantityChange = (size, value) => {
    setQuantities({ ...quantities, [size]: value });
  };

  return (
    <form className="admin-form">
      <div className="form-group">
        <label htmlFor="shoesName">Shoes Name:</label>
        <input type="text" id="shoesName" placeholder="Enter shoes name" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" placeholder="Enter description" />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" placeholder="Enter price" />
      </div>
      <div className="size-quantity">
        <span>Size Available :</span>
        <div className="size-options">
          <div className="size-input">
            <span>S:</span>
            <input
              type="number"
              value={quantities.S}
              onChange={(e) => handleQuantityChange("S", e.target.value)}
            />
          </div>
          <div className="size-input">
            <span>M:</span>
            <input
              type="number"
              value={quantities.M}
              onChange={(e) => handleQuantityChange("M", e.target.value)}
            />
          </div>
          <div className="size-input">
            <span>L:</span>
            <input
              type="number"
              value={quantities.L}
              onChange={(e) => handleQuantityChange("L", e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="add-button">Add Product</button>
    </form>
  );
};

export default AdminForm;
