import React from 'react';
import { Link } from 'react-router-dom';

const GridCard = ({ image, movieId, actor, actorId }) => {
  if (actor) {
    return (
      <div className="col-md-3 col-6">
        <div className="wrap-item">
          <div className="wrapImage">
            <Link to={`/actor/${actorId}`}>
              <img src={image} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-md-3 col-6">
        <div className="wrap-item">
          <div className="wrapImage">
            <Link to={`/movie/${movieId}`}>
              <img src={image} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default GridCard;
