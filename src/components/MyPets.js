import { useState, useEffect } from 'react'
import PetCard from "./PetCard";

function MyPets() {
    const [myPets, setMyPets] = useState([]);
    const myPetsList = myPets.map(myPet => 
        <PetCard petObj={myPet} key={myPet.id}>
            <button onClick={() => handleRemovePet(myPet)}>Remove From My Pets</button><br /><br />
            <button id='takehome'>Take Me Home!</button>
        </PetCard>);

    useEffect(() => {
        fetch(`http://localhost:3000/mypets`)
        .then(resp => resp.json())
        .then(myPetsArray => setMyPets(myPetsArray))
    },[]);

    function handleRemovePet(petObj) {
        fetch(`http://localhost:3000/mypets/${petObj.id}`, {
            method: 'DELETE'})
        .then(setMyPets(myPets.filter(myPet => myPet.id !== petObj.id)))
    };

    return (
        <div className='petdiv'>
            <h2 id='title'>My Pets ʕ•́ᴥ•̀ʔっ</h2>
            {myPetsList}
        </div>
    );
};

export default MyPets;