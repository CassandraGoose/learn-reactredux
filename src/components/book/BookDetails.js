import React, {PropTypes} from 'react';

const BookDetails = (props) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Title</h4>
          <ul>
            <li><stron>Author: </stron> Author</li>
            <li><stron>Price: </stron> Price</li>
            <li><stron>Year: </stron> Year</li>
            <br/>
            <button className="btn btn-primary">Buy</button>
          </ul>
        </div>
      </div>
    );
};

export default BookDetails;
