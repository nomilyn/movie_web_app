import {useEffect, useContext} from 'react';

import TVShow from "./TVShow";
import MovieContext from "../context/MovieContext";

const TVShowList = () => {
    const {tvShows, setTVShows} = useContext(MovieContext);   

    useEffect(() => {
      fetch("http://localhost:5000/tvShows")
      .then((res) => {
        return res.json();
      })
      .then((tvShowsData) => {
        setTVShows(tvShowsData);
      })
      .catch((err) => {
        console.log(`Error : ${err}`)
      })
    },[])
    
    return (
      <section id = "section-tv-list">
        <div className = 'container'>
          <h2>List Of All TV Shows</h2>
          <div className = "display-grid-list">
            {tvShows.map(tvShow=>(<TVShow key={tvShow.id} id={tvShow.id} title={tvShow.title} poster={tvShow.poster} />))}    
          </div>
        </div>
      </section>
    )
}

export default TVShowList
