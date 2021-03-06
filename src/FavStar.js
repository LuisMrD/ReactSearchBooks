import React, {Component} from 'react';

class FavStar extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    changeColor(){
        this.setState({clicked: !this.state.clicked})
    }

    // addFavBook(image, title, date, desc, link){
    //     var bookInfos = {image: image, title: title, published: date, description: desc, link: link}
    //     localStorage.setItem(link, JSON.stringify(bookInfos));
    // }

    render(){
        var btn_class = this.state.clicked ? "fill-star fas fa-star" : "void-star fas fa-star";

        return (
             <div>
                <i className={btn_class} onClick={this.changeColor.bind(this)}></i>
             </div>
        )
    }
}


export default FavStar;