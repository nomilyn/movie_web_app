import {useEffect, useContext} from 'react';
import FeaturedMovie from "./FeaturedMovie";
import MovieContext from "../context/MovieContext";

const FeaturedMovieList = () => {
    const {movies, setMovies} = useContext(MovieContext);
    
    useEffect(()=>{
      fetch("http://localhost:5000/movies?isFeaturedMovie=true")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log(`Error :  ${error}`)
      })
    },[])

    return (
      <section id = "section-movie-featured-list">
        <div className = 'container'>
          <h2>Featured Movies</h2>
          <div className = "display-grid-list">
            {movies.map(movie=>(<FeaturedMovie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />))}    
          </div>
        </div>
      </section>
    )
}

export default FeaturedMovieList
