import React from 'react';
import PlantCard from "./PlantCard";

function PlantList({plants, search, id, setDeleteID, handleDeleteFetch}) {
 
  const searchElements = plants.filter((plant)=>plant.name.toLowerCase().includes(search.toLowerCase()))
 
  const cardElements = searchElements.map((plant) => {
    return (
      <PlantCard key={plant.id} id={plant.id} plant={plant} setDeleteID={setDeleteID} handleDeleteFetch={handleDeleteFetch} />
    )
  })

  return (
    <ul className="cards">{cardElements}</ul>
  );
}

export default PlantList;