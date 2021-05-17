import React from 'react';

function addFavBook(image, title, date, desc, link){
    var bookInfos = {image: image, title: title, date: date, desc: desc, link: link}
    localStorage.setItem(link, JSON.stringify(bookInfos));
}

const BookCard = (props) => {
    return (
        <div className="card-container">
            <a href={props.link} target="_blank" rel="noreferrer"><img src={props.image} alt=""/></a>
            <div className="desc">
                <h2>Título: {props.title}</h2>
                <h3>Ano: {props.published}</h3>
                <p>Descrição: {props.description}</p>
                <input onClick={() => addFavBook(props.image, props.title, props.published, props.description, props.link)} type="checkbox" />
            </div>
        </div>
    )
}

export default BookCard;