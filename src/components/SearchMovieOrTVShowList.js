import React, { useState, useEffect, useContext } from 'react'
import Movie from "./Movie";
import TVShow from "./TVShow";
import MovieContext from "../context/MovieContext";

const SearchMovieOrTVShowList = () => {

    const { id, setId } = useContext(MovieContext);

    let movieTitle = id.title;
    let tvshowTitle = id.title;

    const [movies, setMovies] = useState([]);
    const [tvshows, setTVShows] = useState([]);

    //Movies
    useEffect(() => {
        fetch("http://localhost:5000/movies/title?title=" + movieTitle)
            .then((res) => {
                return res.json();
            })
            .then((moviesData) => {
                setMovies(moviesData.body);
            })
            .catch((error) => {
                console.log(`Error ${error}`)
            })
    }, [])

    //TV Shows
    useEffect(() => {
        fetch("http://localhost:5000/tvshows/title?title=" + tvshowTitle)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTVShows(data.body);
            })
            .catch((err) => {
                console.log(`Error : ${err}`)
            })
    }, [])

    return (
        <main>
            <section id="section-movie-featured-list">
                <div className='container'>
                    <h2>Searched Movies By Title</h2>
                    <div className="display-grid-list-5">
                        {movies.map(movie => (<Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />))}
                    </div>
                </div>
            </section>
            <hr />
            <section id="section-movie-featured-list">
                <div className="container">
                    <h2>Searched TV Shows By Title</h2>
                    <div className="display-grid-list-5">
                        {tvshows.map(tvshow => (<TVShow key={tvshow.id} id={tvshow.id} title={tvshow.title} poster={tvshow.poster} />))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default SearchMovieOrTVShowList
