import React from 'react';
import {Link} from 'react-router-dom';
import * as BookApI from '../../BooksAPI';
const SearchComponent = () => {
    const handleSearch = (event) => {
        let text =event.target.value;
        if(text){
            
        }
    }
    return ( 
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={handleSearch}

                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
        
     );
}
 
export default SearchComponent;