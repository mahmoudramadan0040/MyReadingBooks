import React from 'react';

import * as BookApi from '../../BooksAPI';

const ShelfComponent = ({book,setBooks,Books}) => {
    // console.log(setBooks);
    const HandleShelf =async (event)=>{
        let newShelf = event.target.value;
        if(book.shelf !== newShelf){
            book.shelf = newShelf;
            // here i update state with new value of shelf 
            setBooks(Books => [...Books,book.shelf]);
            // here i update api with new value of shelf
            await BookApi.update(book,newShelf);
        }
    }
    return ( 
        <div className="book-shelf-changer">
            <select onChange={HandleShelf} value={book.shelf ? book.shelf : "none" }>
                <option value="none" disabled >
                Move to...
                </option>
                <option value="currentlyReading">
                Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}
 
export default ShelfComponent;