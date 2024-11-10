import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  addPlant,
  searchQuery,
  handleSearchChange,
  markAsSoldOut,
  deletePlant,
}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <PlantList
        plants={plants}
        markAsSoldOut={markAsSoldOut}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;