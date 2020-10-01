import Axios from 'axios';
import { API_KEY, API_URL } from '../components/Config';

export const fetchMovieData = async (page) => {
  try {
    const path = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=${page}`;
    const { results } = await fetch(path).then((res) => res.json());
    return { results };
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetailData = async (movieId) => {
  try {
    const path = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-us`;
    const request = await fetch(path).then((res) => res.json());
    return { request };
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCastData = async (movieId) => {
  try {
    const path = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const { cast } = await fetch(path).then((res) => res.json());
    return { cast };
  } catch (error) {
    console.log(error);
  }
};
