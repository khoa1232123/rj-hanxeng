import React from 'react';

const MainImage = ({ image, title, text }) => {
  return (
    <div
      className="row header-movie"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="header">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MainImage;
