import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hideBookModal, addBook, editBook } from '../actions'
import { BOOK_MODAL_MODES } from '../consts'
import { stripNonAlphanumerics, capitalize, checkDoubleName } from '../helpers'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback  } from 'availity-reactstrap-validation'
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';

class BookModal extends Component {
    constructor(props) {
      super(props);

      this.handleClose = this.handleClose.bind(this)
      this.handleValidSubmit = this.handleValidSubmit.bind(this)

      this.state = {
        id: this.props.selectedBook.id,
        author: this.props.selectedBook.author,
        title: this.props.selectedBook.title,
        date: this.props.selectedBook.date
      }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            id: nextProps.selectedBook.id,
            author: nextProps.selectedBook.author,
            title: nextProps.selectedBook.title,
            date: nextProps.selectedBook.date
        })
    }

    handleValidSubmit(event, values) {
        let book = values 
        book.id = this.state.id
        book.title = capitalize(stripNonAlphanumerics(book.title))

        let allTitles = this.props.books.map( book => book.title)
        let duplicated = checkDoubleName(book.title, allTitles)
        if (duplicated.isExist) {
            alert(`The title "${duplicated.title}" is already exist !`)
            return
        }
        if (this.props.bookModal.mode === BOOK_MODAL_MODES.CREATE_NEW_BOOK) {
            this.props.addBook(book)
        } else {
            this.editExistBook(book, this.props.books)
        }
        this.handleClose()
    }
    
    handleClose() {
        this.props.hideBookModal()
    }

    editExistBook(editedBook, books) {
        let newListOfBooks = books.map( book => {
            if (book.id === editedBook.id) {
                return editedBook
            } else {
                return book
            }
        })
        this.props.editBook(newListOfBooks)
    }
  
    render() {
      let {showBookModal, mode} = this.props.bookModal

      return (
        <div>
            <Modal isOpen={showBookModal} toggle={this.handleClose}>
                <ModalHeader toggle={this.handleClose}>{mode}</ModalHeader>
                <ModalBody>
                    <AvForm onValidSubmit={this.handleValidSubmit} >
                        <AvField placeholder="Book title"
                                 value={this.state.title}
                                 name="title"
                                 label="Title" 
                                 type="text" 
                                 validate={{required: true}} />
                        <AvField placeholder="Book author" 
                                 value={this.state.author}
                                 name="author" label="Author" 
                                 type="text"
                                 validate={{required: {value: true}}} /> 
                        <AvField placeholder="MM/DD/YYYY" 
                                 value={this.state.date} 
                                 name="date" 
                                 label="Date" type="text" 
                                 validate={{date: {format: 'MM/DD/YYYY'}, required: {value: true}}} 
                                 title="Use MM/DD/YYYY" />
                        <Button className="btn btn-outline-primary mg-right-10">Submit</Button>
                        <Button className="btn btn-outline-default" onClick={()=>{this.handleClose()}}>Cancel</Button>
                    </AvForm> 
                </ModalBody>
            </Modal>
        </div>
      )
    }
  }

function mapStateToProps(state) {
    let {bookModal, selectedBook, books} = state
    return { bookModal, selectedBook, books }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideBookModal, addBook, editBook }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BookModal)