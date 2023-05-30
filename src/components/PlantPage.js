import React, { useEffect, useState } from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [deleteID, setDeleteID] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  });


  useEffect(() => {
    fetchData();
  }, []);

  //--------> Init Fetch
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:6001/plants');
      const jsonData = await response.json();
      setPlants(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //--------> Post New Plant & reFetch data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      fetchData();
      setFormData({
        name: '',
        image: '',
        price: '',
      }); //Why doesn't this clear fields
      // Handle response here (e.g., show success message, reset form)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteFetch = async (deleteID) => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${deleteID}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  //------------------------------------------------------------------------->
  //Form 

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  //----------------------------------------------------------------------------------->
  //JSX
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} formData={formData} />
      <Search setSearch={setSearch} />
      <PlantList search={search} plants={plants} setDeleteID={setDeleteID} handleDeleteFetch={handleDeleteFetch} />
    </main>
  );
}

export default PlantPage;
