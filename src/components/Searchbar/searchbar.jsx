import React from 'react';
import{BiSearchAlt} from 'react-icons/bi';

function SearchBar() {
  return(
    <form>
      <input type="search" placeholder="Buscar Produtos" className="search_input" required />
      <button type="submit" className="search_button"><BiSearchAlt/> </button>
    </form>
  );
}

export default SearchBar;
