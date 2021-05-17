import React from 'react';

const SearchArea = (props) => {
    return (        
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>                
            </form>
            <button onClick={props.handleFavBooks}>Favorite Books</button>
        </div>
    )
}

export default SearchArea;