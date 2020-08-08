import React, { useState } from 'react';
import './style.scss';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const continentsDefault = [
  { key: 1, value: 'Africa' },
  { key: 2, value: 'Europe' },
  { key: 3, value: 'Asia' },
  { key: 4, value: 'North America' },
  { key: 5, value: 'South America' },
  { key: 6, value: 'Australia' },
  { key: 7, value: 'Antarctica' },
];

function UploadProductPage(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [continents, setContinents] = useState(1);

  const [images, setImages] = useState([]);

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      writer: props.user.userData._id,
      title: title,
      description: description,
      price: parseInt(price),
      images: images,
      continents: parseInt(continents),
    };

    Axios.post('/api/product/uploadProduct', variables).then((res) => {
      console.log(res);
      if (res.data.success) {
        alert('Product Successfully Uploaded');
        props.history.push('/');
      } else {
        alert('Failed to upload Product');
      }
    });
  };

  return (
    <div className="uploadProduct container">
      <div className="header">
        <h2>Upload product page</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <FileUpload refreshFunction={updateImages} />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="form-control"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            placeholder="Description"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price($)</label>
          <input
            id="price"
            className="form-control"
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="continents">Continents</label>
          <select
            className="form-control w-50"
            onChange={(e) => setContinents(e.target.value)}
            value={continents}
            id="continents"
          >
            {continentsDefault.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadProductPage;
