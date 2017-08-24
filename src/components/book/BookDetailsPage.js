import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookDetails from './BookDetails'
import * as bookActions from '../../actions/bookActions'

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount () {
    let { fetchBookById, bookID, deleteBook } = this.props
    fetchBookById(bookID)
  }

  deleteBook(input) {
    this.props.deleteBook(input)
  }

  render() {
    console.log('bookid', this.props.bookID);
    let { book } = this.props
    // let {bookID} = this.props.bookID
    // let {deleteBook} = this.props.deleteBook
    if (!book) { return null }
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props} deleteBook={this.props.deleteBook} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book,
    bookID: ownProps.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),
    deleteBook: book => dispatch(bookActions.deleteBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage)
