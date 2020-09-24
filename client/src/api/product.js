import Axios from 'axios';

export const fetchProductData = async () => {
  let url = `/api/product/products_by_id?id=${productId}&type=single`;
  try {
    const { data } = Axios.get(url);
    return { data };
  } catch (error) {
    console.log(error);
  }
};
