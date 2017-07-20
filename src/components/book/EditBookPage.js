import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookDetails from './BookDetails'
import submitEditBook from './BookPage'
import * as bookActions from '../../actions/bookActions'

class EditBookPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: this.props.book.title
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  submit (e) {
   e.preventDefault()
   console.log('i want to call the function from my stupid bookpage here wtf');
 }

  componentWillMount () {
    let { fetchBookById, bookID } = this.props
    fetchBookById(bookID)
  }

  render() {

    console.log('editbookpage', this.props);
    let titleInput = this.props
    let { book } = this.props
    if (!book) { return null }
    return (
      <div>
        <h1>Book Edit Page</h1>
        <section>
        <form onSubmit={this.submit}
        className="form-horizontal">
        <div className="input-group">
          <label className="col-sm-2 control-label">Title: </label>
          <div className="col-sm-10">
             <input type="text" value={this.state.value} onChange={this.handleChange}
              name="title"
              className="form-control"/>
          </div>
        </div>
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>
      </form>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditBookPage)
