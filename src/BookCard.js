import React from 'react';

const BookCard = (props) => {
    return (
        <div className="card-container">
            <a href={props.link} target="_blank"><img src={props.image}/></a>
            <div className="desc">
                <h2>Título: {props.title}</h2>
                <h3>Ano: {props.published}</h3>
                <p>Descrição: {props.description}</p>
            </div>
        </div>
    )
}

export default BookCard;