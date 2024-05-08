import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // 부트스트랩 CSS 임포트
import { Form, Row, Col } from 'react-bootstrap';
import './App.css';

function Search() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.trim() === '') {
      // 검색어가 없는 경우, 빈 배열로 영화 목록 초기화
      setMovies([]);
      return;
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkYWRmZWQwNDc5YmNlZTM2MTE2ZDRkM2MyNWY3MyIsInN1YiI6IjY2MzMyMTdmMzU4ZGE3MDEyYTU0OTc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfAMTbPDBqQUAA9AYDp9c0Z7xJKe_KoMOsHLqlzjQw0'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&include_adult=false&language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('API 요청에 실패했습니다.'); // 요청이 성공하지 않으면 에러 throw
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results); 
      })
      .catch(err => console.error(err));
    }, [searchTerm]);
    
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

    return (
        <div className='d-flex flex-column page-container vh-100'>
          <div className='bg-black d-flex flex-column h-50 justify-content-center'>
            <h3>환영합니다</h3>
          </div>
          <div className='d-flex flex-column h-100'>
            <h3 className='pt-5'>Find your movies !</h3>
            <div className="d-flex justify-content-center mt-5">
              <Row className='w-100'>
                <Col md={{ span: 6, offset: 3 }} className='d-flex'>
                  <Form.Control
                      className="border border-black rounded-4 w-100"
                      placeholder=""
                      type="text"
                      value={searchTerm}
                      onChange={handleChange}
                  />
                  <button className='bg-primary bg-warning btn mx-1 rounded-5'>0</button>
                </Col>
              </Row>
            </div>
            <div className='d-flex justify-content-center scroll-container' style={{ overflowX: 'auto'}}>
              <div className="d-flex justify-content-center mt-4 scroll-container" style={{ overflowX: 'auto', width: '75%' }}>
                <div className="bg-gradient d-flex flex-wrap justify-content-center"> {/* 수정된 부분 */}
                  {movies.map(movie => (
                    <div key={movie.id} className="card">
                      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="card-img-top" />
                      <div className='card-body d-flex'>
                        <p className='text-start text-white h6'>{movie.title}</p>
                        <p className='text-end text-white h6'>{movie.vote_average}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    );    
}
export default Search;
