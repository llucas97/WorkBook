import React from 'react';
import './App.css';
import Navbar from './nav';
import SignUp from './Sign_Up';
import TopRated from './Top_Rated';
import UpComing from './Up_Coming';
import Popular from './Popularr';
import Nowplaying from './Now_playing';
import MovieDetail from './MovieDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function MoviePoster() {

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />}/>
        <Route path='/Sign_Up' element={<SignUp />}/>
        <Route path='/Popularr' element={<Popular />}/>
        <Route path='/Popularr/:title' element={<MovieDetail />}/>
        <Route path='/Now_playing' element={<Nowplaying />}/>
        <Route path='/Top_Rated' element={<TopRated />}/>
        <Route path='/Up_Coming' element={<UpComing />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default MoviePoster;
