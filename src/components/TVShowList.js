import {useEffect, useContext} from 'react';

import TVShow from "./TVShow";
import MovieContext from "../context/MovieContext";

const TVShowList = () => {
    const {tvshows, setTVShows} = useContext(MovieContext);   

    useEffect(() => {
      fetch("http://localhost:5000/tvshows")
      .then((res) => {
        return res.json();
      })
      .then((tvShowsData) => {
        setTVShows(tvShowsData.body);
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
            {tvshows.map(tvshow=>(<TVShow key={tvshow.id} id={tvshow.id} title={tvshow.title} poster={tvshow.poster} />))}    
          </div>
        </div>
      </section>
    )
}

export default TVShowList
