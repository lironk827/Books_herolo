import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook, showBookModal, showConfirmModal } from '../actions/'
import { BOOK_MODAL_MODES } from '../consts'

class BookListItem extends Component {
    constructor(props) {
        super(props)

        this.handleEditBook = this.handleEditBook.bind(this)
        this.handleDeleteBook = this.handleDeleteBook.bind(this)
    }

    handleEditBook(book) {
        this.props.selectBook(book)
        this.props.showBookModal(BOOK_MODAL_MODES.EDIT_BOOK)
    }

    handleDeleteBook(book) {
        this.props.selectBook(book)
        this.props.showConfirmModal()
    }

    render() {
        const { book, key, index, selectBook } = this.props

        return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.date}</td>
                <td><Button className="btn btn-outline-warning" onClick={ () => {this.handleEditBook(book)}} >Edit</Button></td>
                <td><Button className="btn btn-outline-danger" onClick={ () => {this.handleDeleteBook(book)}}>Delete</Button></td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook, showBookModal, showConfirmModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookListItem)