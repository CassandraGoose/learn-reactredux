import React, {PropTypes} from 'react';

const BookDetails = ({book}) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{book.title}</h4>
            <br/>
            <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    );
};

export default BookDetails;
