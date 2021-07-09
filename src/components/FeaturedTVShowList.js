import { useEffect, useContext } from 'react';
import FeaturedTVShow from "./FeaturedTVShow";
import MovieContext from "../context/MovieContext";

const FeaturedTVShowList = () => {
    const {tvShows, setTVShows} = useContext(MovieContext);    
    useEffect(()=>{
        fetch("http://localhost:5000/tvShows?isFeaturedTVShow=true")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setTVShows(data);
        })
        .catch((err) => {
          console.log(`Error ${err}`)
        })
    },[])
    
    return (
        <section id = "section-movie-featured-list">
            <div className = "container">
            <h2>Featured TV Shows</h2>
                <div className="display-grid-list">
                    {tvShows.map(movie=>(<FeaturedTVShow key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />))}    
                </div>
            </div>
        </section>
    )
}

export default FeaturedTVShowList
