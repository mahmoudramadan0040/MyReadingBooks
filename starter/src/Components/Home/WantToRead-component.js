import React from 'react';
import { useEffect,useState } from 'react';
import BookComponent from './Book-component';


const GetWantToReadBooks = async(Books) => {
    return await Books.filter(book => book.shelf === 'wantToRead');
    
}
const WantToReadComponent= ({Books,setBooks}) => {
    const [wantToReadBooks,setWantToReadBooks] = useState([]);
    useEffect( () => {
        GetWantToReadBooks(Books).then(book =>{
            setWantToReadBooks(book);
        });
    },[Books]);
    
    console.log(wantToReadBooks);
    return ( 
        <ol className="books-grid">
            {/* looping in book component to show all currently read component */}
            {
                wantToReadBooks.map(book => {
                    return <BookComponent key={book.id}
                    book={book}
                    Books={Books}
                    setBooks={setBooks}/>
                })
            }
            
        </ol>
    );
}

export default WantToReadComponent;