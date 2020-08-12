import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../redux/actions/userActions';

function CartPage({ user: { userData } }) {
  const dispatch = useDispatch();
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
  }, [userData]);

  return (
    <div>
      <h1>CartPage</h1>
    </div>
  );
}

export default CartPage;
