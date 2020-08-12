import React from 'react';

function ProductInfo({ detail, addToCart }) {
  const { _id, price, sold, views, description } = detail;

  const handleAddToCart = () => {
    addToCart(_id);
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Product Info</h3>
      </div>
      <div className="col-12">
        <div className="row align-items-center text-center mb-4">
          <div className="col-6 col-md-4 border-right">
            <span>Price: </span>${price}
          </div>
          <div className="col-6 col-md-4 border-right">
            <span>Sold: </span>
            {sold}
          </div>
          <div className="col-6 col-md-4 border-right">
            <span>Views: </span>
            {views}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 mb-4">
        <span>Description: </span>
        {description}
      </div>
      <div className="col-12 col-md-12">
        <button className="btn btn-primary" onClick={() => handleAddToCart()}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
