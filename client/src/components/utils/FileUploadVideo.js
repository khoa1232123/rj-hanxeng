import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import Axios from 'axios';

function FileUploadVideo(props) {
  const [image, setImage] = useState('');
  const [filePath, setFilePath] = useState('');

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);

    Axios.post('/api/video/uploadfiles', formData, config).then((res) => {
      if (res.data.success) {
        let variable = {
          filePath: res.data.filePath,
          fileName: res.data.fileName,
        };
        setFilePath(res.data.filePath);

        Axios.post('/api/video/thumbnail', variable).then((res) => {
          if (res.data.success) {
          } else {
            alert('Failed to save the Image in Server');
          }
        });
      } else {
        alert('Failed to save the Image in Server');
      }
    });
  };

  const onDelete = (image) => {
    console.log(image);
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
        {image && (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ width: 'auto', height: '100%' }}
              src={`http://localhost:5000/${image}`}
              alt={'productImage'}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUploadVideo;
