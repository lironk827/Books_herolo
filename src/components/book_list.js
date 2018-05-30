import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BookListItem from './Book_list_item'

class BookList extends Component {

    constructor(props){
        super(props)
    }
    
    renderBooks() {
        return this.props.books.map( (book, index) => {
            return (
                <BookListItem 
                        index={index}
                        key={book.id}
                        book={book} /> 
            )
        }) 
    }

    render() {
        if (!this.props.books) {
            return (
                <div>
                    Loading books...
                </div>
            )
        }

        return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderBooks()}
                
                </tbody>
            </table>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { books: state.books}
}

export default connect(mapStateToProps)(BookList)