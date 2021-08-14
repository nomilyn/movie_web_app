import { useEffect, useState, useContext} from 'react';
import { useParams } from "react-router-dom"
import MovieContext from "../context/MovieContext";

const MovieDescription = () => {
    var { id } = useParams();
    //const [movies, setMovies] = useState([]);
    const {movies, setMovies} = useContext(MovieContext);

    useEffect(() => {
        fetch("http://localhost:5000/movies/"+id)
            .then((res) => {
                return res.json();
            })
            .then((moviesData) => {
                setMovies(moviesData.body);
            })
            .catch((error) => {
                console.log(`Error : ${error}`)
            })
    }, [])

    return (
        <main>
            {movies.map((movie => {
                if(movie.id == id)
            return (
                        <section id="movie-tv-details-section">
                            <div className="display-grid-description">
                                <img className="image-description" src={'/images/' + movie.poster} alt="" />
                                <div className="movie-tv-details-area">
                                    <h3>{movie.title}</h3>
                                    <br />
                                    <h4>Description</h4>
                                    <p>{movie.description}</p>
                                    <h4>Rent Price</h4>
                                    <p>${movie.priceRent}</p>
                                    <h4>Purchase Price</h4>
                                    <p>${movie.purchasePrice}</p>
                                </div>
                                <div>
                                    <img className="image-description" src={'/images/' + movie.sPoster} alt="" />
                                </div>
                            </div>
                        </section>
                   )
                }))}
        </main>)
}

export default MovieDescription
