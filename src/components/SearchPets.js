function SearchPets({ handleSearch }) {

    return (
        <div id='searchbar'> 
            <input 
                type="text"
                className='searchbar'
                id="search"
                placeholder="Search Pets"
                onChange={(e) => handleSearch(e)}
            />
        </div>
    )
}

export default SearchPets;