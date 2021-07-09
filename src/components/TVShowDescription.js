import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"

const TVShowDescription = ()=> {    
    const {id} = useParams();
    const [tvShow, setTVShow] = useState({});
    useEffect(()=>{
    fetch("http://localhost:5000/tvShows/"+id)
    .then((res) => {
         return res.json();
    })
    .then((tvShowsData) => {
       setTVShow(tvShowsData);
    })
    .catch((error) => {
         console.log(`Error : ${error}`)
    }); 
   },[])

    return (
        <section id = "movie-tv-details-section">
            <div className = "display-grid-description">
                <img className = "image-description" src = {'/images/'+tvShow.poster} alt = ""/>            
                <div className = "movie-tv-details-area">
                    <h3>{tvShow.title}</h3> 
                    <br/>
                    <h4>Description</h4>
                    <p>{tvShow.description}</p>
                    <h4>Rent Price</h4>
                    <p>${tvShow.priceRent}</p>
                    <h4>Purchase Price</h4>
                    <p>${tvShow.purchasePrice}</p>
                </div>
                <div>
                    <img className = "image-description" src = {'/images/'+tvShow.sPoster} alt = ""/> 
                </div>
            </div>
        </section>
    )
}

export default TVShowDescription
