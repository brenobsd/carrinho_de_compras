import React from 'react';
import SearchBar from '../Searchbar/searchbar';
import './header.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function Header() {
  return(
    <header>
      <div className="container">
        <SearchBar  />
        <button type="submit" className="cart_button"><AiOutlineShoppingCart/></button>
      </div>
    </header>
  );
}
export default Header;
