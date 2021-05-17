import React from 'react';

const SearchArea = (props) => {
    console.log('SA '+props.searchFavBooks);
    return (        
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
                <button type="submit">Favorite Books</button>
            </form>
            
        </div>
    )
}

export default SearchArea;