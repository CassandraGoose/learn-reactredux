import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import EditDeleteForm from './EditDeleteForm'
import * as bookActions from '../../actions/bookActions'

const BookDetails = (props) => {
console.log('propsbookdetails', props);
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.book.title}</h4>
          <br/>
          <EditDeleteForm deleteBook={props.deleteBook.bind(this)} bookID={props.book.bookID}></EditDeleteForm>
      </div>
    </div>
  );
};

export default BookDetails;
