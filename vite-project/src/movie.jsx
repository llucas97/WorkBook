import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './nav';
import SignUp from './Sign_Up';
import TopRated from './Top_Rated';
import UpComing from './Up_Coming';
import Popularr from './Popularr';
import Nowplaying from './Now_playing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function MoviePoster() {
  const [hoveredMovie, setHoveredMovie] = useState(null); 
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

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results); 
      })
      .catch(err => console.error(err));
  }, []); 

  return (
    <BrowserRouter>
      <div className="movie-container">
        <Navbar />
        <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route path='/Sign_Up' element={<SignUp />}/>
          <Route path='/Popularr' element={<Popularr />}/>
          <Route path='/Now_playing' element={<Nowplaying />}/>
          <Route path='/Top_Rated' element={<TopRated />}/>
          <Route path='/Up_Coming' element={<UpComing />}/>
        </Routes>
        {movies.map((movie) => ( 
          <div 
            key={movie.id} 
            className='card' 
            onMouseEnter={() => setHoveredMovie(movie)} 
            onMouseLeave={() => setHoveredMovie(null)} 
          >
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <div className='cardBottom'>
              <h5 className='zero'>{movie.original_title}</h5>
              <p>{movie.vote_average}</p>
            </div>
            {hoveredMovie && hoveredMovie.id === movie.id && (
              <div className='hover-info'>
                <h5>{movie.original_title}</h5>
                <p>{movie.overview}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </BrowserRouter>
  );
}

export default MoviePoster;
