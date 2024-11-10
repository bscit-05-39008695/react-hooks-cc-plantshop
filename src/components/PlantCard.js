import React from "react";

function PlantCard({ plant, markAsSoldOut, deletePlant }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.soldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => markAsSoldOut(plant.id)}>
          In Stock
        </button>
      )}
      <button onClick={() => deletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
