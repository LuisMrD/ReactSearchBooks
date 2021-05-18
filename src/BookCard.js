import React from 'react';
import FavStar from './FavStar';

function addFavBook(image, title, date, desc, link){
    var bookInfos = {image: image, title: title, published: date, description: desc, link: link}
    localStorage.setItem(link, JSON.stringify(bookInfos));
}

const BookCard = (props) => {
    return (
        <div className="card">
            <div className="card-cover">
                <a href={props.link} target="_blank" rel="noreferrer"><img src={props.image} alt="" className="card-img"/></a>
            </div>
            <div className="card-description">
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-text">Ano: {props.published}</h3>
                <p className="card-text">Descrição: {props.description}</p>                
            </div>
            <div className="card-favorite">
                <span onClick={() => addFavBook(props.image, props.title, props.published, props.description, props.link)}><FavStar/></span>
            </div>            
        </div>
    )
}

export default BookCard;