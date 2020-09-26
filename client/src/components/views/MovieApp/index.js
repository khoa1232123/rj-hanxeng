import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../Config';
import { Typography, Row } from 'antd';
import './style.scss';
import MainImage from './sections/MainImage';
import Grid from 'antd/lib/card/Grid';
import GridCard from './sections/GridCard';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = (page = 1) => {
    const path = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=${page}`;
    fetch(path)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies([...movies, ...res.results]);
        setCurrentPage(res.page);
      });
  };

  const handleClick = () => {
    const page = currentPage + 1;
    fetchMovie(page);
  };

  return (
    <div className="container-fluid">
      {movies[0] && (
        <MainImage
          image={`${IMAGE_URL}w1280${movies[0].backdrop_path}`}
          title={movies[0].original_title}
          text={movies[0].overview}
        />
      )}

      <div className="container content-main">
        <h2>Movies by latest</h2>
        <div className="row">
          {/* <div className="col-6 mb-4"></div>
          <div className="col-6 mb-4"></div>
          <div className="col-12 mb-4 d-flex justify-content-end"></div> */}
          {movies &&
            movies.map((movie, index) => (
              <GridCard
                key={index}
                image={
                  movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`
                }
                movieId={movie.id}
              />
            ))}
          <div className="col-12 header">
            <button onClick={handleClick} className="btn btn-light btn-lg">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
