import React, {PropTypes} from 'react';
import {Link} from 'react-router'

const BookDetails = (props) => {
  console.log(props);
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
          <Link to={`/books/${props.book.id}/edit`}><button className="btn btn-primary">Edit</button></Link>
          <button className="btn btn-primary">Remove</button>
      </div>
    </div>
  );
};

export default BookDetails;
