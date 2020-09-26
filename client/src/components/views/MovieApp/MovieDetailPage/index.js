import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../../Config';
import MainImage from '../sections/MainImage';
import { Descriptions } from 'antd';
import GridCard from '../sections/GridCard';

const MovieDetailPage = (props) => {
  const [movie, setMovie] = useState([]);
  const [actorToggle, setActorToggle] = useState(false);
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const movieId = props.match.params.movieId;
    const path = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-us`;
    fetch(path)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setCasts(res.cast);
          });
      });
  }, []);

  const handleClick = () => {
    setActorToggle(!actorToggle);
  };

  return (
    <div className="container-fluid">
      {movie.backdrop_path && (
        <MainImage
          image={`${IMAGE_URL}w1280${
            movie.backdrop_path && movie.backdrop_path
          }`}
          title={movie.original_title}
          text={movie.overview}
        />
      )}
      <div className="container">
        <Descriptions title="more info" bordered>
          <Descriptions.Item label="Title">
            {movie.original_title}
          </Descriptions.Item>
          <Descriptions.Item label="Release date">
            {movie.release_date}
          </Descriptions.Item>
          <Descriptions.Item label="Revenue">{movie.revenue}</Descriptions.Item>
          <Descriptions.Item label="vote_average" span={2}>
            {movie.vote_average}
          </Descriptions.Item>
          <Descriptions.Item label="vote_count">
            {movie.vote_count}
          </Descriptions.Item>
          <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
          <Descriptions.Item label="popularity">
            {movie.popularity}
          </Descriptions.Item>
        </Descriptions>
        <div className="buttonActorView mt-4">
          <button onClick={handleClick} className="btn btn-light">
            Actor View
          </button>
        </div>
        {actorToggle && (
          <div className="row mt-4">
            {casts &&
              casts.map((cast, index) => (
                <GridCard
                  key={index}
                  actor
                  image={
                    cast.profile_path && `${IMAGE_URL}w500${cast.profile_path}`
                  }
                  actorId={cast.id}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
