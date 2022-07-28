async function  loadMovieById(id){

    const categoriesResponse = await fetch('http://localhost:3131/movie/' + id);
    
   
    const [Movie] = await Promise.all([categoriesResponse]);
  
    const MovieJson = await Movie.json();
    console.log(MovieJson);

  
    return MovieJson;
  
  }
  
  export { loadMovieById };