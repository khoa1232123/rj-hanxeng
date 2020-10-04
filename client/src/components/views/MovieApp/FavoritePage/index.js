import React, { useEffect } from 'react';
import { Popover } from 'antd';
import { IMAGE_URL } from '../../../Config';
import {
  getFavorite,
  removeFavorite,
} from '../../../../redux/actions/favoriteActions';
import { connect } from 'react-redux';

const FavoritePage = ({ getFavorite, removeFavorite, favoriteList }) => {
  useEffect(() => {
    getFavorite();
  }, [getFavorite]);

  const handleClick = (movieId) => {
    removeFavorite(movieId);
  };

  const renderTableBody =
    favoriteList &&
    favoriteList.map((favorite, index) => {
      const content = (
        <div>
          {favorite.movieImage ? (
            <img src={`${IMAGE_URL}w500${favorite.movieImage}`} alt="image" />
          ) : (
            'no Image'
          )}
        </div>
      );
      return (
        <tr key={index}>
          <Popover title={favorite.movieTitle} content={content}>
            <td>{favorite.movieTitle}</td>
          </Popover>
          <td>{favorite.movieRunTime} min</td>
          <td>
            <button
              onClick={() => handleClick(favorite.movieId)}
              className="btn btn-danger btn-sm"
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container mt-5">
      <h2>Favorite</h2>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="50%">Movie Title</th>
            <th width="25%">Movie Runtime</th>
            <th width="25%">Remove from favorites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.favorite);
  return {
    favoriteList: state.favorite.favoriteList,
  };
};

const mapDispatchToProps = {
  getFavorite,
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
