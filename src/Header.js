import React from 'react';

const Header = (props) => {
    return (
        <header className="title-page">
            <h1><i className="fas fa-book"></i> Procura Livros</h1>
            <span onClick={props.handleFavBooks} className="fav-btn"><i className="fas fa-star"> Livros Favoritos</i></span>
        </header>
    )
}

export default Header;