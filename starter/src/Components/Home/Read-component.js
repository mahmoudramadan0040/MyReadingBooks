import { useEffect,useState } from 'react';
import BookComponent from './Book-component';
import React from 'react';

const GetReadBooks = async(Books) => {
    return await Books.filter(book => book.shelf === 'read');
}
const ReadComponent = ({Books,setBooks}) => {
    const [ReadBooks, setReadBooks] = useState([]);
    useEffect( () => {
        GetReadBooks(Books).then(book =>{
            setReadBooks(book);
        });
    },[Books]);
    
    return ( 
        <ol className="books-grid">
            {/* looping in book component to show all currently read component */}
            {
                ReadBooks.map(book => {
                    return <BookComponent key={book.id} 
                    book={book} 
                    Books={Books}
                    setBooks ={setBooks} />
                })
            }
            
        </ol>
    );
}

export default ReadComponent;