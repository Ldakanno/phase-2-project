import PetCard from "./PetCard";
import AddButton from "./AddButton";

function PetList({ pets }) {

    const petListContents =  pets.map(pet => 
        <PetCard key={pet.id} petObj={pet} >
            <AddButton pet={pet} />
        </PetCard>);

    return (
        <div className='petdiv'>
            {petListContents}
        </div>
    )
}

export default PetList;
