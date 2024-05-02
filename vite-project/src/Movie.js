const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkYWRmZWQwNDc5YmNlZTM2MTE2ZDRkM2MyNWY3MyIsInN1YiI6IjY2MzMyMTdmMzU4ZGE3MDEyYTU0OTc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfAMTbPDBqQUAA9AYDp9c0Z7xJKe_KoMOsHLqlzjQw0'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));