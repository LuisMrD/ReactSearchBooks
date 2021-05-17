import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    var thumb = book.volumeInfo.imageLinks;
                    if(typeof thumb != 'undefined'){
                        thumb = book.volumeInfo.imageLinks.thumbnail;
                    }else {
                        thumb = '/googlebooks/images/no_cover_thumb.gif';
                    }
                    return <BookCard
                                key={i} 
                                image= {thumb}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDay}
                            />
                })
            }
        </div>
    )
}

export default BookList;