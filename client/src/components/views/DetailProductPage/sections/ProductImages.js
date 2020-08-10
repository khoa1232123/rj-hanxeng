import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

function ProductImages({ detail }) {
  const { images } = detail;
  const [imageGal, setImageGal] = useState([]);

  useEffect(() => {
    if (images && images.length > 0) {
      let imagesArr = [];
      images.map((item) => {
        console.log(item);
        imagesArr.push({
          original: `http://localhost:5000/${item}`,
          thumbnail: `http://localhost:5000/${item}`,
        });
      });
      setImageGal(imagesArr);
    }
  }, [images]);

  return (
    <div>
      <ImageGallery items={imageGal} />
    </div>
  );
}

export default ProductImages;
