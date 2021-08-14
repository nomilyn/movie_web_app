import { useEffect, useContext } from 'react';
import FeaturedTVShow from "./FeaturedTVShow";
import MovieContext from "../context/MovieContext";

const FeaturedTVShowList = () => {
  const {tvshows, setTVShows} = useContext(MovieContext);    
  
  useEffect(()=>{
    fetch("http://localhost:5000/tvshows/isFeaturedTVShow?featured=true") 
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setTVShows(data.body);
    })
    .catch((err) => {
      console.log(`Error : ${err}`)
    })
  },[])
    
  return (
    <section id = "section-movie-featured-list">
      <div className = "container">
        <h2>Featured TV Shows</h2>
        <div className = "display-grid-list">
          {tvshows.map(tvshow =>(<FeaturedTVShow key={tvshow.id} id={tvshow.id} title={tvshow.title} poster={tvshow.poster} />))}    
        </div>
      </div>
    </section>
  )
}

export default FeaturedTVShowList
