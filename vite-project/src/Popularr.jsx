import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function Popularr(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 영화 정보 가져오기
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkYWRmZWQwNDc5YmNlZTM2MTE2ZDRkM2MyNWY3MyIsInN1YiI6IjY2MzMyMTdmMzU4ZGE3MDEyYTU0OTc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfAMTbPDBqQUAA9AYDp9c0Z7xJKe_KoMOsHLqlzjQw0'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results); 
      })
      .catch(err => console.error(err));
  }, []); 
    return (
      <div className="movie-container">
        {movies.map((movie) => ( 
          <div key={movie.id} className='card' >
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <div className='cardBottom'>
              <h5 className='zero'>{movie.original_title}</h5>
              <p>{movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Popularr;