import Axios from 'axios';
import { GET_FAVORITE_LIST } from '../types';

export function getFavorite() {
  return async (dispatch) => {
    const variables = { userFrom: localStorage.getItem('userId') };
    const request = await Axios.post('/api/favorite/getFavorite', variables);
    console.log(request);
    dispatch({
      type: GET_FAVORITE_LIST,
      payload: request.data.favorites,
    });
  };
}
