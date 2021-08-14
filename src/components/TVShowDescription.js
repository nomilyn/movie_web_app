import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom"
import MovieContext from "../context/MovieContext";

const TVShowDescription = () => {
    const { id } = useParams();
    //const [tvshows, setTVShow] = useState([]);
    const {tvshows, setTVShow} = useContext(MovieContext);
    useEffect(() => {
        fetch("http://localhost:5000/tvshows/" + id)
            .then((res) => {
                return res.json();
            })
            .then((tvShowsData) => {
                setTVShow(tvShowsData.body);
            })
            .catch((error) => {
                console.log(`Error : ${error}`)
            });
    }, [])

    return (
        <main>
            {tvshows.map((tvshow => {
                if(tvshow.id == id)
                    return (
                        <section id="movie-tv-details-section">
                            <div className="display-grid-description">
                                <img className="image-description" src={'/images/' + tvshow.poster} alt="" />
                                <div className="movie-tv-details-area">
                                    <h3>{tvshow.title}</h3>
                                    <br />
                                    <h4>Description</h4>
                                    <p>{tvshow.description}</p>
                                    <h4>Rent Price</h4>
                                    <p>${tvshow.priceRent}</p>
                                    <h4>Purchase Price</h4>
                                    <p>${tvshow.purchasePrice}</p>
                                </div>
                                <div>
                                    <img className="image-description" src={'/images/' + tvshow.sPoster} alt="" />
                                </div>
                            </div>
                        </section>
                    )
            }))}
        </main>)
}

export default TVShowDescription
