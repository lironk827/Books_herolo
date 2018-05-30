import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BookList from './book_list'
import ToolBar from './tool_bar'
import BookModal from './book_modal'
import ConfirmModal from './confirm_modal'
import { loadBooks } from '../actions'
import axios from 'axios'

class App extends Component {
  
  constructor(props){
    super(props)
  }

  fetchBooks() {
    const ax = axios.create({
        baseURL: 'http://localhost:8080/src/data'
      })
  
      ax.get('MOCK_DATA.json')
           .then( response => {this.props.loadBooks(response.data.books)})
  }

  render() {
    let showBookModal = this.props.bookModal
    let showConfirmModal = this.props.confirmModal
    return (
      <div>
        <ToolBar />
        <BookList />
        {showBookModal && <BookModal />}
        {showConfirmModal && <ConfirmModal />}
      </div>
    )
  }

  componentDidMount() {
    this.fetchBooks()
  }
}

function mapStateToProps(state) {
  let {bookModal, confirmModal} = state
  return { bookModal, confirmModal }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadBooks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)