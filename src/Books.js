import React, {Component} from 'react';
import SearchArea from './SearchArea';
import request from 'axios';
import BookList from './BookList';
import BookFavList from './BookFavList';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault(); 
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        request.get(url + this.state.searchField.replaceAll(' ', '+'))
          .then(data => {
              this.setState({ books: [data.data.items][0]})
              console.log(this.state.books)
          })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }

    render(){
        return (
        <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
            <BookFavList favBooks={this.state.favBooks}/>
        </div>
        )
    }
}


export default Books;
