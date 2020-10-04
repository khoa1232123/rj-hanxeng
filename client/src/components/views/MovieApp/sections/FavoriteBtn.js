import React, { useEffect } from 'react';
import {
  getFavorite,
  removeFavorite,
  getFavoriteNumber,
  getFavorited,
  addFavorite,
} from '../../../../redux/actions/favoriteActions';
import { connect } from 'react-redux';

const FavoriteBtn = ({
  movieInfo,
  getFavoriteNumber,
  favoriteNumber,
  getFavorited,
  favorited,
  addFavorite,
  removeFavorite,
}) => {
  useEffect(() => {
    getFavoriteNumber(movieInfo);
    getFavorited(movieInfo);
  }, [getFavoriteNumber, getFavorited]);

  const handleClick = () => {
    if (favorited) {
      removeFavorite(movieInfo.id);
    } else {
      addFavorite(movieInfo);
    }
  };
  console.log(favoriteNumber);

  return (
    <div className="buttonFavorite mt-4">
      <button onClick={handleClick} className="btn btn-light">
        {favorited ? 'Remove from Favorite ' : 'Add to Favorite '}
        {favoriteNumber}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteNumber: state.favorite.favoriteNumber,
    favorited: state.favorite.favorited,
  };
};

const mapDispatchToProps = {
  getFavorite,
  getFavoriteNumber,
  removeFavorite,
  getFavorited,
  addFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBtn);
