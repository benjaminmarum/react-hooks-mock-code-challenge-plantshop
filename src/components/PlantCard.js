import React, {useState } from 'react';

function PlantCard({plant, id ,setDeleteID, handleDeleteFetch}) {
  const [inStock, setInStock] = useState('primary');
  const [price, setPrice] = useState(plant.price);
  

  const handleBtnClick = (event) => {
    if (inStock==='primary') {
      setInStock('')
    } else {
      setInStock('primary')
  }};

  const handleDeleteBtn = () => {
    setDeleteID(id)
    handleDeleteFetch(id)
  };

  const handleNewPrice = (event) => {
    setPrice(price)
    event.preventDefault();
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(price) }),
    });
  };



  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>

      <form onSubmit={handleNewPrice}>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          value={price}
        />
      </form>

      {inStock ? (
        <button onClick={handleBtnClick} className={inStock}>In Stock</button>
      ) : (
        <button onClick={handleBtnClick} className={inStock}>Out of Stock</button>
      )}
       <button onClick={handleDeleteBtn}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
