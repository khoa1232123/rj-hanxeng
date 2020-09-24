import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getCartItems,
  removeCartItem,
} from '../../../redux/actions/userActions';
import UserCardBlock from './sections/UserCardBlock';
import { Result, Empty } from 'antd';
import Axios from 'axios';

const CartPage = ({ user: { userData, cartDetail } }) => {
  const dispatch = useDispatch();
  const [totalCart, setTotalCart] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];
    if (userData && userData.cart) {
      if (userData.cart.length > 0) {
        userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, userData.cart));
      }
    }
    if (cartDetail && cartDetail.length > 0) {
      calculateTotal(cartDetail);
    }
  }, [userData, cartDetail]);

  const calculateTotal = (cartDetail) => {
    let total = 0;
    cartDetail.map((item) => {
      total += parseInt(item.price) * item.quantity;
    });
    setTotalCart(total);
    setShowTotal(true);
  };

  // const removeFromCart = (productId) => {
  //   console.log(productId);
  //   dispatch(removeCartItem(productId)).then((res) => {
  //     if (res.data.success) {
  //       if (res.data.cartDetail.length <= 0) {
  //         setShowTotal(false);
  //       } else {
  //         calculateTotal(res.data.cartDetail);
  //       }
  //     }
  //   });
  // };
  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.cartDetail.length <= 0) {
        setShowTotal(false);
      } else {
        calculateTotal(response.payload.cartDetail);
      }
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>My Cart</h1>
      </div>
      <div className="row">
        <UserCardBlock products={cartDetail} removeItems={removeFromCart} />
        {showTotal ? (
          <div className="total-amount col-12">
            <h2>Total amount: ${totalCart}</h2>
          </div>
        ) : showSuccess ? (
          <div className="col-12">
            <Result status="success" title="Successfully Purchased Items" />
          </div>
        ) : (
          <div className="col-12">
            <Empty description={false} />
            <p>No Items In the Cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
