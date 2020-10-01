import Axios from 'axios';

export const fetchFavoriteData = async () => {
  let url = '/api/favorite/getFavorite';
  try {
    const variables = { userFrom: localStorage.getItem('userId') };
    const {
      data: { favorites },
    } = await Axios.post(url, variables);
    return { favorites };
  } catch (error) {
    console.log(error);
  }
};

export const removeFevoriteData = async (movieId) => {
  try {
    const variable = { movieId, userFrom: localStorage.getItem('userId') };
    await Axios.post('/api/favorite/removeFromFavorite', variable);
  } catch (error) {
    console.log(error);
  }
};

export const addFevoriteData = async (movieInfo) => {
  try {
    const variable = {
      userFrom: localStorage.getItem('userId'),
      movieId: movieInfo.id,
      movieTitle: movieInfo.original_title,
      movieImage: movieInfo.poster_path,
      movieRunTime: movieInfo.runtime,
    };
    await Axios.post('/api/favorite/addToFavorite', variable);
  } catch (error) {
    console.log(error);
  }
};

export const getFevoriteNumberData = async (movieInfo) => {
  try {
    const variable = {
      userFrom: localStorage.getItem('userId'),
      movieId: movieInfo.id,
      movieTitle: movieInfo.original_title,
      movieImage: movieInfo.poster_path,
      movieRunTime: movieInfo.runtime,
    };
    const {
      data: { favoriteNumber },
    } = await Axios.post('/api/favorite/favoriteNumber', variable);
    return { favoriteNumber };
  } catch (error) {
    console.log(error);
  }
};

export const getFevoritedData = async (movieInfo) => {
  try {
    const variable = {
      userFrom: localStorage.getItem('userId'),
      movieId: movieInfo.id,
      movieTitle: movieInfo.original_title,
      movieImage: movieInfo.poster_path,
      movieRunTime: movieInfo.runtime,
    };
    const {
      data: { favorited },
    } = await Axios.post('/api/favorite/favorited', variable);
    return { favorited };
  } catch (error) {
    console.log(error);
  }
};
