import React from 'react';
import ReadComponent from './Read-component';
import WantToReadComponent from './WantToRead-component';
import CurrentlyReadComponent from './CurrentlyRead-component';
import SearchBtnComponent from '../Search/SearchBtn-component';
import * as BookApI from '../../BooksAPI';
import { useEffect,useState} from 'react';
const HomeComponent = () => {
    const [Books,setBooks]= useState([]);
    useEffect( async() => {
        setBooks(await BookApI.getAll());
    },[]);
    console.log(Books);
   return (  
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <CurrentlyReadComponent Books={Books} setBooks ={setBooks}/>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <WantToReadComponent Books={Books} setBooks ={setBooks}/>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ReadComponent Books={Books} setBooks ={setBooks}/>
                    </div>
                </div>
            </div>
            <SearchBtnComponent/>
        </div>
       
    </div>
   );

}
 
export default HomeComponent;