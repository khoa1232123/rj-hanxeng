import React, { useEffect, useState } from 'react';
import { IMAGE_URL } from '../../../Config';
import MainImage from '../sections/MainImage';
import { Descriptions } from 'antd';
import GridCard from '../sections/GridCard';
import FavoriteBtn from '../sections/FavoriteBtn';
import {
  fetchMovieDetail,
  fetchMovieCast,
} from '../../../../redux/actions/movieActions';
import { connect } from 'react-redux';

const MovieDetailPage = ({
  fetchMovieDetail,
  fetchMovieCast,
  movieDetail,
  castList,
  ...props
}) => {
  const movieId = props.match.params.movieId;
  const [actorToggle, setActorToggle] = useState(false);
  useEffect(() => {
    fetchMovieDetail(movieId);
    fetchMovieCast(movieId);
  }, [fetchMovieDetail, fetchMovieCast]);

  const handleClick = () => {
    setActorToggle(!actorToggle);
  };
  console.log(movieDetail);
  if (movieDetail.id) {
    return (
      <div className="container-fluid">
        {movieDetail.backdrop_path && (
          <MainImage
            image={`${IMAGE_URL}w1280${
              movieDetail.backdrop_path && movieDetail.backdrop_path
            }`}
            title={movieDetail.original_title}
            text={movieDetail.overview}
          />
        )}
        <div className="container">
          <FavoriteBtn
            userFrom={localStorage.getItem('userId')}
            movieInfo={movieDetail}
          />
          <Descriptions title="more info" bordered>
            <Descriptions.Item label="Title">
              {movieDetail.original_title}
            </Descriptions.Item>
            <Descriptions.Item label="Release date">
              {movieDetail.release_date}
            </Descriptions.Item>
            <Descriptions.Item label="Revenue">
              {movieDetail.revenue}
            </Descriptions.Item>
            <Descriptions.Item label="vote_average" span={2}>
              {movieDetail.vote_average}
            </Descriptions.Item>
            <Descriptions.Item label="vote_count">
              {movieDetail.vote_count}
            </Descriptions.Item>
            <Descriptions.Item label="status">
              {movieDetail.status}
            </Descriptions.Item>
            <Descriptions.Item label="popularity">
              {movieDetail.popularity}
            </Descriptions.Item>
          </Descriptions>
          <div className="buttonActorView mt-4">
            <button onClick={handleClick} className="btn btn-light">
              Actor View
            </button>
          </div>
          {actorToggle && (
            <div className="row mt-4">
              {castList &&
                castList.map((cast, index) => (
                  <GridCard
                    key={index}
                    actor
                    image={
                      cast.profile_path &&
                      `${IMAGE_URL}w500${cast.profile_path}`
                    }
                    actorId={cast.id}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    castList: state.movie.castList,
  };
};

const mapDispatchToProps = {
  fetchMovieDetail,
  fetchMovieCast,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
