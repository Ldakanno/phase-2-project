function AddButton({ pet }) {

    function handleAddPet(petObj) {
        fetch(`http://localhost:3000/mypets`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(petObj)
        });
    };

    return (
        <button onClick={() => handleAddPet(pet)}>Add To My Pets</button>
    )
}

export default AddButton;