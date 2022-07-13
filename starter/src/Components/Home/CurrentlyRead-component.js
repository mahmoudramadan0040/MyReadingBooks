import React from 'react';
import { useEffect,useState } from 'react';
import BookComponent from './Book-component';

const GetCurrentlyReadBooks = async(Books) => {
    return await Books.filter(books => books.shelf === 'currentlyReading');
}
const CurrentlyReadComponent = ({Books,setBooks}) => {
    
    const [currentlyReadBooks, setCurrentlyReadBooks] = useState([]);
    useEffect( () => {
        GetCurrentlyReadBooks(Books).then(book =>{
            setCurrentlyReadBooks(book);
        });
    },[Books]);
    
    console.log(currentlyReadBooks);
    return ( 
        <ol className="books-grid">
            {/* looping in book component to show all currently read component */}
            {
                currentlyReadBooks.map(book => {
                    return <BookComponent key={book.id} 
                    book={book} 
                    Books={Books}
                    setBooks={setBooks}/>
                })
            }
            
        </ol>
    );
}

export default CurrentlyReadComponent;