import {useContext, useEffect} from 'react';
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";

const MovieList = () => {
    const {movies, setMovies} = useContext(MovieContext);
    useEffect(()=>{
        fetch("http://localhost:5000/movies")
        .then((res) => {
          return res.json();
        })
        .then((moviesData) => {
          setMovies(moviesData.body);
        })
        .catch((error) => {
          console.log(`Error ${error}`)
        })
      },[])

    return (
        <section id = "section-movie-list">
            <div className = "container">
            <h2>List Of All Movies</h2>
                <div className="display-grid-list">
                    {movies.map(movie=>(<Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />))}    
                </div>
            </div>
        </section>
    )
}

export default MovieList
