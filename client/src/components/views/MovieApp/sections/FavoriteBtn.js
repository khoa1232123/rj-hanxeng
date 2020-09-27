import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const FavoriteBtn = ({ userFrom, movieInfo }) => {
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const variable = {
    userFrom,
    movieId: movieInfo.id,
    movieTitle: movieInfo.original_title,
    movieImage: movieInfo.poster_path,
    movieRunTime: movieInfo.runtime,
  };
  useEffect(() => {
    console.log(movieInfo);
    Axios.post('/api/favorite/favoriteNumber', variable).then((res) => {
      if (res.data.success) {
        setFavoriteNumber(res.data.favoriteNumber);
      } else {
        alert('failed to get favoriteNumber');
      }
    });
    Axios.post('/api/favorite/favorited', variable).then((res) => {
      if (res.data.success) {
        setFavorited(res.data.favorited);
        console.log(res.data);
      } else {
        alert('failed to get favorite info');
      }
    });
  }, [setFavoriteNumber, setFavorited]);

  const handleClick = () => {
    if (favorited) {
      Axios.post('/api/favorite/removeFromFavorite', variable).then((res) => {
        if (res.data.success) {
          setFavoriteNumber(favoriteNumber - 1);
          setFavorited(!favorited);
        } else {
          alert('faild remove from favorite');
        }
      });
    } else {
      Axios.post('/api/favorite/addToFavorite', variable).then((res) => {
        if (res.data.success) {
          setFavoriteNumber(favoriteNumber + 1);
          setFavorited(!favorited);
        } else {
          alert('faild add to favorite');
        }
      });
    }
  };

  return (
    <div className="buttonFavorite mt-4">
      <button onClick={handleClick} className="btn btn-light">
        {favorited ? 'Remove from Favorite ' : 'Add to Favorite '}
        {favoriteNumber}
      </button>
    </div>
  );
};

export default FavoriteBtn;
