import React, {Component} from 'react';
import SearchArea from './SearchArea';
import request from 'axios';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault()
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        request.get(url + this.state.searchField)
          .then(data => console.log(data))
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }

    render(){
        return (
        <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        </div>
        )
    }
}


export default Books;
