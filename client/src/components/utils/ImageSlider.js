import React from 'react';
import { Carousel } from 'antd';

function ImageSlider(props) {
  return (
    <div className="list-card-img">
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={`img-${index}`} className="card-img">
            <img src={image} alt="productImage" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
