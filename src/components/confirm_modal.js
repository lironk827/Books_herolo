// this component can get the Modal title and body text as props to be better reusable

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { hideConfirmModal, deleteBook } from '../actions'

class ConfirmModal extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClose() {
    this.props.hideConfirmModal()
  }

  handleSubmit() {
    let { selectedBook, books } = this.props
    let newListOfBooks = books.filter( book => {
      return book.id !== selectedBook.id
    })
    this.props.deleteBook(newListOfBooks)
    this.handleClose()
  }

  render() {

    let { confirmModal } = this.props
    return (
      <div>
        <Modal isOpen={confirmModal} toggle={this.handleClose}>
          <ModalHeader toggle={this.handleClose}>Delete Prompt</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this book ? 
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-outline-danger" onClick={()=>{this.handleSubmit()}}>Yes</Button>
            <Button className="btn btn-outline-primary" onClick={()=>{this.handleClose()}}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {confirmModal, selectedBook, books} = state
  return { confirmModal, selectedBook, books }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideConfirmModal, deleteBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal)
