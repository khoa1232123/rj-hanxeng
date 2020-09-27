import { API_KEY, API_URL } from '../../components/Config';
import { FETCH_MOVIE_DATA } from '../types';

export function fetchMovieData(page = 1) {
  return async (dispatch) => {
    const path = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=${page}`;
    const request = await fetch(path).then((res) => res.json());
    // fetch(path)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setMovies([...movies, ...res.results]);
    //     setCurrentPage(res.page);
    //   });
    console.log(request);
    dispatch({
      type: FETCH_MOVIE_DATA,
      payload: request,
    });
  };
}
