import {Link} from "react-router-dom";

const TVShow = ({id,title,poster}) => {

    const alternative_text= `${title} Poster `;

    const imagePath = `/images/${poster}`;
    return (
        <div className="tv-card">
            
           <Link to = {"/tv-shows/"+id}>
                <img src={imagePath} alt={alternative_text}/>   
            </Link> 

            <div className="movie-tvshow-title"> {title} </div>
        </div>
    )
}

export default TVShow
