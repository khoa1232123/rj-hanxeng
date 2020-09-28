import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../Config';
import './style.scss';
import MainImage from './sections/MainImage';
import GridCard from './sections/GridCard';
import { fetchMovieData } from '../../../redux/actions/movieActions';
import { connect } from 'react-redux';

const MovieApp = ({ fetchMovieData, movieList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = () => {
    const page = currentPage + 1;
    fetchMovieData(page);
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid">
      {movieList[0] && (
        <MainImage
          image={`${IMAGE_URL}w1280${movieList[0].backdrop_path}`}
          title={movieList[0].original_title}
          text={movieList[0].overview}
        />
      )}

      <div className="container content-main">
        <h2>Movies by latest</h2>
        <div className="row">
          {movieList &&
            movieList.map((movie, index) => (
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

const mapStateToProps = (state) => {
  console.log(state.movie);
  return {
    movieList: state.movie.movieList,
  };
};

const mapDispatchToProps = {
  fetchMovieData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);
