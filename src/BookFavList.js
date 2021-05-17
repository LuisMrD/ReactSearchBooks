import React from 'react';
import BookCard from './BookCard';

function getFavBooks(){
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    return values;
}

const BookFavList = () => {
    var favBooks = getFavBooks();
    return (
        <div className="list">
            {
                favBooks.map((book, i) => {
                    return <BookCard
                                key={i} 
                                image= {book.image}
                                title={book.title}
                                published={book.published}
                                description={book.description}
                                link={book.link}                          
                            />
                })
            }
        </div>
    )
}

export default BookFavList;