import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation, useParams } from 'react-router-dom';

function MovieDetail() {
  const location = useLocation(); // 현재 URL 정보.
  const { posterPath, vote, date, overview, title } = location.state; // 전달된 영화 정보.

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid pb-4 mx-3" src={`https://image.tmdb.org/t/p/w400${posterPath}`} alt={title} />
        </div>
        <div className="align-content-center col-md-7 text-start">
          <h2 className='pb-4'>{title}</h2>
          <p className='pb-4'><strong>평점:</strong> {vote}</p>
          <p className='pb-4'><strong>개봉일:</strong> {date}</p>
          <p className='pb-4'><strong>줄거리</strong> </p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );    
}

export default MovieDetail;
