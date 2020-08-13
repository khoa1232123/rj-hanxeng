import React from 'react';

function UserCardBlock({ products, removeItems }) {
  const renderItems =
    products &&
    products.map((product) => (
      <tr key={product._id}>
        <td>
          <img
            src={`http://localhost:5000/${product.images[0]}`}
            alt="product"
            style={{ width: 70 }}
          />
        </td>
        <td>{product.title}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>
          <button
            onClick={() => removeItems(product._id)}
            className="btn btn-danger"
          >
            Remove
          </button>
        </td>
      </tr>
    ));
  return (
    <div className="col-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderItems}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
