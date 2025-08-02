import css from './SearchBox.module.css'


const SearchBox = ({keyword, handleSearch}) => {
    
    return (
        <div className={css.searchBoxDiv}>
        <p>Find contacts by name</p>
        <input type="text" value={keyword} name="Name" onChange={handleSearch}/>
        </div>
      );
}

export default SearchBox
