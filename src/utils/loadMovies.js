async function loadMovies(){
    const moviesResponse = await fetch('http://localhost:3131/movie');

    const [movies] = await Promise.all([moviesResponse]);
  
    const moviesJson = await movies.json();
  
    return moviesJson;
  
  }
  
  export {loadMovies };