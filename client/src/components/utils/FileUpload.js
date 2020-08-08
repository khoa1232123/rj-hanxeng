import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import Axios from 'axios';

function FileUpload(props) {
  const [images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);

    Axios.post('/api/product/uploadImage', formData, config).then((res) => {
      if (res.data.success) {
        setImages([...images, res.data.image]);
        props.refreshFunction([...images, res.data.image]);
      } else {
        alert('Failed to save the Image in Server');
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];

    newImages.splice(currentIndex, 1);

    setImages(newImages);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000}>
        {({ getRootProps, getInputProps }) => (
          <div className="box-square" {...getRootProps()}>
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: '3rem' }} />
          </div>
        )}
      </Dropzone>
      <div
        className="box-square ml-4"
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          justifyContent: 'normal',
        }}
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => onDelete(image)}>
            <img
              style={{ width: 'auto', height: '100%' }}
              src={`http://localhost:5000/${image}`}
              alt={`productImage-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
