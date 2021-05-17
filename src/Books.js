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
            searchField: '',
            displayBookList: false,
            displayBookFavList: false,
        }
    }

    searchBook = (e) => {
        e.preventDefault(); 
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        request.get(url + this.state.searchField.replaceAll(' ', '+') + '&maxResults=40')
          .then(data => {
              this.setState({ books: [data.data.items][0]})
              console.log(this.data)
          })
        this.setState({ displayBookList: true})
        this.setState({ displayBookFavList: false})
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})        
    }

    handleFavBooks = () => {
        this.setState({ displayBookFavList: true})
        this.setState({ displayBookList: false})
    }

    render(){
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleFavBooks={this.handleFavBooks}/>
                {this.state.displayBookFavList === true ? <BookFavList displayBookFavList={this.state.displayBookFavList}/> : null}
                {this.state.displayBookList === true ? <BookList books={this.state.books} displayBookList={this.state.displayBookList}/> : null}                
            </div>
        )
    }
}


export default Books;
