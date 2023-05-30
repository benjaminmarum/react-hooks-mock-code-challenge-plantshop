import React from 'react';

function NewPlantForm ({handleInputChange, handleSubmit, formData}) {
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleInputChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
