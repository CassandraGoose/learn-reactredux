import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookDetails from './BookDetails'
import * as bookActions from '../../actions/bookActions'

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //actions mappings herrrrr
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage)
