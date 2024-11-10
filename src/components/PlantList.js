import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, markAsSoldOut, deletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          markAsSoldOut={markAsSoldOut}
          deletePlant={deletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
