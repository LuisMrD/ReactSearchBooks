import React from 'react';

const SearchArea = (props) => {
    return (        
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" className="search-bar"/>
                <button type="submit" className="search-btn">Search</button>                
            </form>
            <button onClick={props.handleFavBooks} className="fav-btn">Favorite Books</button>
        </div>
    )
}

export default SearchArea;