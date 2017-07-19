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
    let { fetchBookById, bookID } = this.props
    fetchBookById(bookID)
  }

  render() {
    let { book } = this.props
    if (!book) { return null }
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props.book}/>
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
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage)
