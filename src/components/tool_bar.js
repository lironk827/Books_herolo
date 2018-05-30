import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newBook, showBookModal } from '../actions'
import { Button } from 'reactstrap'
import { BOOK_MODAL_MODES } from '../consts'


class ToolBar extends Component {

  constructor(props){
    super(props)
  }
  
  handleNewBook() {
    this.props.newBook(Math.random())
    this.props.showBookModal(BOOK_MODAL_MODES.CREATE_NEW_BOOK)
  }

  render() {
    return (
        <div className="toolbar-container">
            <Button className="btn btn-outline-primary" onClick={ () => {this.handleNewBook()}} >New Book</Button>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newBook, showBookModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(ToolBar)