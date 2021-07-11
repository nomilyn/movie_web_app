import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const MovieDescription = ()=> { 
    const {id} = useParams();
    const [movie,setMovie] = useState({});

    useEffect(()=>{
    fetch("/movies/"+id)
    .then((res) => {
        return res.json();
    })
    .then((moviesData) => {
       setMovie(moviesData);
    })
    .catch((error) => {
        console.log(`Error : ${error}`)
    })
    },[])

    return (
        <section id = "movie-tv-details-section">
            <div className = "display-grid-description">
                <img className = "image-description" src = {'/images/'+movie.poster} alt = ""/>            
                <div className = "movie-tv-details-area">
                    <h3>{movie.title}</h3>
                    <br/>
                    <h4>Description</h4>
                    <p>{movie.description}</p>
                    <h4>Rent Price</h4>
                    <p>${movie.priceRent}</p>
                    <h4>Purchase Price</h4>
                    <p>${movie.purchasePrice}</p>
                </div>
                <div>
                    <img className = "image-description" src = {'/images/'+movie.sPoster} alt = ""/>
                </div>
            </div>
        </section>
    )
}

export default MovieDescription
