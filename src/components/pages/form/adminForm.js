import React, { useContext, useState } from "react";
import { ShoesContext } from "../../store/ShoesContext";

const AdminForm = ({ hideModalHandler }) => {
  const { setShoesList } = useContext(ShoesContext);
  const [shoesDetails, setShoesDetails] = useState({
    name: "",
    description: "",
    price: "",
    S: "",
    M: "",
    L: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://shoes-shop-bd85f-default-rtdb.firebaseio.com/shoesDetails.json",
      {
        method: "POST",
        body: JSON.stringify(shoesDetails),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const newDataKey = await response.json();
    const newData = {
      key: newDataKey,
      ...shoesDetails,
    };
    setShoesList((prevList) => [...prevList, newData]);
    setShoesDetails({
      name: "",
      description: "",
      price: "",
      S: "",
      M: "",
      L: "",
    });
  }
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="shoesName">Shoes Name:</label>
          <input
            type="text"
            id="shoesName"
            placeholder="Enter shoes name"
            value={shoesDetails.name}
            onChange={(e) =>
              setShoesDetails({ ...shoesDetails, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            value={shoesDetails.description}
            onChange={(e) =>
              setShoesDetails({ ...shoesDetails, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            value={shoesDetails.price}
            onChange={(e) =>
              setShoesDetails({ ...shoesDetails, price: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <span>Size Available :</span>
          <div>
            <div>
              <span>S:</span>
              <input
                type="number"
                value={shoesDetails.S}
                onChange={(e) =>
                  setShoesDetails({ ...shoesDetails, S: e.target.value })
                }
              />
            </div>
            <div>
              <span>M:</span>
              <input
                type="number"
                value={shoesDetails.M}
                onChange={(e) =>
                  setShoesDetails({ ...shoesDetails, M: e.target.value })
                }
              />
            </div>
            <div>
              <span>L:</span>
              <input
                type="number"
                value={shoesDetails.L}
                onChange={(e) =>
                  setShoesDetails({ ...shoesDetails, L: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <button className="add-button" type="submit" onClick={handleSubmit}>Add Product</button>
      </div>
    </form>
      <button onClick={hideModalHandler}>close</button>
    </div>
  );
};

export default AdminForm;
