import React from 'react';
import {Link} from 'react-router-dom';
import * as BookApI from '../../BooksAPI';
import BookComponent from '../Home/Book-component';
import { useState ,useEffect } from 'react';
const SearchComponent = () => {
    const [searchBooks,setSearchBooks]=useState([]);
    const [Books,setBooks]=useState([]);
    const [msgFound,setMsgFound]=useState('');
    useEffect( () => {
        BookApI.getAll().then((books)=>{
            // setSearchBooks(books);
            setBooks(books);
            console.log(books);
        });
    },[]);
    const handleSearch = (event) => {
        let query =event.target.value;
        setTimeout(() => {
            if(query){
                BookApI.search(query).then((books)=>{
                    if(books.length){
                        console.log(books);
                        // filter books that in state from the search result
                    
                        books.filter((book)=>{
                            return Books.find((b)=>{
                                    if(b.id===book.id){
                                        book.shelf=b.shelf;
                                        return b;
                                    }else{
                                        book.shelf='none'
                                        return null;
                                    }
                                });
                            })
                        // console.log(BookFilterInHome);
                        setSearchBooks(books);
                    }else{
                        setMsgFound('No books found');
                        setSearchBooks([]);
                    }
                });
            }else{
                // console.log(searchBooks);
                setSearchBooks([]);
                // console.log(searchBooks)
                setMsgFound('');
            }
        }, 1500);
        // search();
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
                        }): <div><h2>{msgFound}</h2></div>
                    }
                </ol>
            </div>
        </div>
        
     );
}
 
export default SearchComponent;