import React, { useState, useEffect } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import NewPetForm from './NewPetForm';
import PetList from './PetList';
import MyPets from './MyPets';
import PetDetails from './PetDetails';

function App() {
  const [pets, setPets] = useState([]);
  const [searchPet, setSearchPet] = useState('');
  const [newPetInput, setNewPet] = useState(
    {name: '', age: '', animal: '', image: '', size: '', sex: '', description: '' });
  

  useEffect(() => {
    fetch(`http://localhost:3000/pets`)
    .then(resp => resp.json())
    .then(petArray => setPets(petArray))
  },[]);

  function handleSubmit(e) {
    e.preventDefault();
    setNewPet(newPetInput)
    fetch(`http://localhost:3000/pets`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPetInput)})
    .then(resp => resp.json())
    .then(newPet => setPets([...pets, newPet]))
    console.log(newPetInput)
    setNewPet({name: '', age: '', animal: '', image: '', size: '', sex: '', description: '' });
  };

  function handleSearch(e) {
    setSearchPet(e.target.value);
  }

  const petsCopy = [...pets];
  const SearchPetArray = petsCopy.filter(pet => {
    const type = pet.animal.toLowerCase();
    return type.includes(searchPet.toLowerCase())
  });

  return (
    <div className="app">
      <Header searchPet={searchPet} 
              handleSearch={handleSearch} 
      />
      <div className='bodyContent'>
        <NewPetForm newPetInput={newPetInput} 
                setNewPet={setNewPet}  
                handleSubmit={handleSubmit} 
        />
        <Switch>
          <Route path='/pets/mine' component={MyPets} />
          <Route path='/pets/:id' component={PetDetails} />
          <Route path='/'>
            <PetList pets={SearchPetArray}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;