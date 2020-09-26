import React, { useEffect } from 'react';
import Axios from 'axios';

const FavoriteBtn = () => {
  useEffect(() => {
    Axios.post('/api/favorite/favoriteNumber', variable).then((res) => {
      if (res.data.success) {
      } else {
        alert('failed to get favoriteNumber');
      }
    });
  }, []);

  return (
    <div className="buttonFavorite mt-4">
      <button className="btn btn-light">Add to Favorite</button>
    </div>
  );
};

export default FavoriteBtn;
