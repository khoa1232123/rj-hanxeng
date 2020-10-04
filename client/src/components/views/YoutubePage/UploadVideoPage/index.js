import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import FileUploadVideo from '../../../utils/FileUploadVideo';
import data from '../../../../data.json';

const UploadVideoPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState(1);
  const [category, setCategory] = useState(2);

  const onsubmit = () => {};

  return (
    <div className="uploadVideo container">
      <div className="header mt-5">
        <h2>Upload Video</h2>
      </div>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <FileUploadVideo />
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
          <label htmlFor="continents">Privacy</label>
          <select
            className="form-control w-50"
            id="privacy"
            onChange={(e) => setPrivacy(e.target.value)}
            value={privacy}
          >
            {data.private &&
              data.private.map((item, index) => (
                <option key={`privacy-${index}`} value={item.value}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="continents">Category</label>
          <select
            className="form-control w-50"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {data.categories &&
              data.categories.map((item, index) => (
                <option key={`category-${index}`} value={item.value}>
                  {item.label}
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
};

export default UploadVideoPage;
