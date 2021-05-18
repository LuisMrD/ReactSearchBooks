import React from 'react';

const SearchArea = (props) => {
    return (        
        <div className="search-area">
            <form onSubmit={props.searchBook} action="" className="search">
                <input onChange={props.handleSearch} type="text" className="search-bar searchTerm"/>
                <button type="submit" className="search-btn searchButton"><i class="fa fa-search"></i></button>                
            </form>
        </div>
    )
}

export default SearchArea;