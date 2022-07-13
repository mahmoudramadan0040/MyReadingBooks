import React from 'react';
import {Link} from 'react-router-dom';
import * as BookApI from '../../BooksAPI';
import BookComponent from '../Home/Book-component';
import { useState ,useEffect } from 'react';
const SearchComponent = () => {
    const [searchBooks,setSearchBooks]=useState([]);
    const [Books,setBooks]=useState([]);
    useEffect( () => {
        BookApI.getAll().then((books)=>{
            setSearchBooks(books);
            setBooks(books);
            console.log(books);
        });
    },[]);
    const handleSearch = (event) => {
        let query =event.target.value;
        // console.log(query);
        if(query){
            // Books.filter();
            // console.log(query);
            BookApI.search(query).then((book)=>{
                setSearchBooks(book);
            });
            // console.log(searchBooks);
        }else{
            BookApI.getAll().then((book)=>{
                setSearchBooks(book);
            });
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
                <ol className="books-grid">
                    {
                        searchBooks.length ? searchBooks.map((book) => {
                            return <BookComponent key={book.id} book={book} Books={Books} setBooks={setBooks}/>
                        }): <div>
                                <h2>No Books Found</h2>
                            </div>
                    }
                </ol>
            </div>
        </div>
        
     );
}
 
export default SearchComponent;