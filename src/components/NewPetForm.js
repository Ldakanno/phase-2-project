import React, { useState } from 'react';

function NewPetForm({ newPetInput, setNewPet, handleSubmit }) {
    const [sizeChecked, setSizeChecked] = useState(false);
    const [sexChecked, setSexChecked] = useState(false);
    const {name, age, animal, image, description} = newPetInput;

    function handleChecksSize(e){
       console.log(e.target.value)
       setSizeChecked(e.target.value)
       setNewPet({...newPetInput, size: e.target.value})
    };

    function handleChecksSex(e){
       setSexChecked(e.target.value)
       setNewPet({...newPetInput, sex: e.target.value})
    };

    return (
        <div className="form-box" id='newAnimalForm'>
               <h3>Add New Pet:</h3>
            <form onSubmit={e => {handleSubmit(e)
                                  setSizeChecked(false)
                                  setSexChecked(false)}}>
              <input type='text'
                     className='text'
                     placeholder='Name'
                     id='name'
                     name='name'
                     value={name}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /> <br /><br />
              <input type='text'
                     className='text'
                     placeholder='Animal Type'
                     id='animalType'
                     name='animal'
                     value={animal}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br /><br />
              <input type='text'
                     className='text'
                     placeholder='Age Estimate'
                     id='age'
                     name='age'
                     value={age}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br /><br />
              <input type='text'
                     className='text'
                     placeholder='Image'
                     id='image'
                     name='image'
                     value={image}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br /><br />
              <input type='text'
                     className='text'
                     placeholder='Description'
                     id='description'
                     name='description' 
                     value={description}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br /><br />
              <div id='size'> Size: <br />
                     <input checked={sizeChecked === 'small'} 
                            type="checkbox" 
                            id="small" 
                            name="small" 
                            value="small"
                            onChange={(e) => handleChecksSize(e)}
                     />
                     <label htmlFor="small"> Small</label><br />
                     <input checked={sizeChecked === 'medium'} 
                            type="checkbox" 
                            id="medium" 
                            name="medium" 
                            value="medium" 
                            onChange={(e) => handleChecksSize(e)}
                     />
                     <label htmlFor="medium"> Medium</label><br />
                     <input checked={sizeChecked === 'large'} 
                            type="checkbox" 
                            id="large" 
                            name="large" 
                            value="large"
                            onChange={(e) => handleChecksSize(e)}
                     />
                     <label htmlFor="large"> Large</label>
              </div><br />
              <div id='sex'> Sex: <br />
                     <input checked={sexChecked === 'male'} 
                            type="checkbox" id="male" 
                            name="male" 
                            value="male" 
                            onChange={(e) => handleChecksSex(e)}
                     />
                     <label htmlFor="male"> Male</label><br />
                     <input checked={sexChecked === 'female'} 
                            type="checkbox" 
                            id="female" 
                            name="female" 
                            value="female" 
                            onChange={(e) => handleChecksSex(e)}
                     />
                     <label htmlFor="female"> Female</label><br />
              </div>
              <button className='submitButton'>Submit New Pet!</button>
            </form>
        </div>
    );
};

export default NewPetForm;