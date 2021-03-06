import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ProductImages from './sections/ProductImages';
import ProductInfo from './sections/ProductInfo';
import { addToCart } from '../../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

function DetailProductPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;

  const [productDetail, setProductDetail] = useState([]);
  console.log(productDetail);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (res) => {
        setProductDetail(res.data[0]);
      }
    );
  }, []);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="container">
      <div className="header mt-4 mb-4">
        <h2>{productDetail.title}</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <ProductImages detail={productDetail} />
        </div>
        <div className="col-12 col-md-6">
          <ProductInfo addToCart={addToCartHandler} detail={productDetail} />
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
