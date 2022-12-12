import React from 'react';
import { Link } from 'react-router-dom';

function PetCard({ petObj, children }) {
    const {name, image, sex, animal, id} = petObj;

    return (
        <div id={id} className='petcard'>
            <img src={image} alt={name} className='takeme' />
            <h2>{name}</h2>
            <p>Type of Animal: {animal}</p>
            <p>Sex: {sex}</p>
            <button>
                <Link className='cardLinks' to={`/pets/${id}`}>Learn More</Link>
            </button>
            <br />
            <br />
            {children}
        </div>
    )
}

export default PetCard;

