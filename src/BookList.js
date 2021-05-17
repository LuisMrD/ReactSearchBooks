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
                        //thumb = 'https://a-static.mlcdn.com.br/574x431/livro-mal-da-terra/ludylivros/9788577530052/6f32dc7781463b4e1dd866ef1c1cbe9b.jpg';
                        thumb = 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/822a5d14da9a2c8b035750e0f1838e2c186360a9.jpg';
                    }

                    var desc = book.volumeInfo.description;
                    if(typeof desc != 'undefined'){
                        desc = book.volumeInfo.description;
                    }else {
                        desc = 'Sem descrição disponível';
                    }

                    var pubDay = book.volumeInfo.publishedDate
                    if(typeof pubDay != 'undefined'){
                        pubDay = book.volumeInfo.publishedDate.substring(0,4);
                    }else {
                        pubDay = 'Indisponível';
                    }

                    return <BookCard
                                key={i} 
                                image= {thumb}
                                title={book.volumeInfo.title}
                                published={pubDay}
                                description={desc}
                                link={book.volumeInfo.infoLink}                               
                            />
                })
            }
        </div>
    )
}

export default BookList;