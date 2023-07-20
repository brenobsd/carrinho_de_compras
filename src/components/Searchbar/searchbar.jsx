import React from 'react';
import{BiSearchAlt} from 'react-icons/bi';
import './searchbar.css';

function SearchBar() {
  return(
    <form className="search_bar">
      <input type="search" placeholder="Buscar Produtos" className="search_input" required />
      <button type="submit" className="search_button"><BiSearchAlt/> </button>
    </form>
  );
}

export default SearchBar;
