import React from 'react';

function ProductInfo({ detail }) {
  const { price, sold, views, description } = detail;
  return (
    <div className="row">
      <div className="col-12">
        <h3>Product Info</h3>
      </div>
      <div className="col-12">
        <div className="row align-items-center text-center mb-4">
          <div className="col-6 col-md-3 border-right">
            <span>Price: </span>${price}
          </div>
          <div className="col-6 col-md-3 border-right">
            <span>Sold: </span>
            {sold}
          </div>
          <div className="col-6 col-md-3 border-right">
            <span>Views: </span>
            {views}
          </div>
          <div className="col-6 col-md-3">
            <button className="btn btn-primary">add to cart</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12">
        <span>Description: </span>
        {description}
      </div>
    </div>
  );
}

export default ProductInfo;
