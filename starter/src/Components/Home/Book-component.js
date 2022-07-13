import React from 'react';
import ShelfComponent from './Shelf-component';
const BookComponent = ({book,setBooks,Books}) =>  {
    // destructuring book object
    const {title,authors, imageLinks } = book ;
    return ( 
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${imageLinks ? imageLinks.thumbnail : null })`,
                    }}
                    ></div>
                    <ShelfComponent 
                    book={book} 
                    setBooks={setBooks} 
                    Books={Books}/>
                </div>
                <div className="book-title">{title}</div>
                {
                    authors.map((author,index) => { 
                        return <div className="book-authors" key={index}>{author}</div>
                    })
                }
            </div>
        </li>
     );
}

export default BookComponent;