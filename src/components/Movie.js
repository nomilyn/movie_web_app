import { Link } from "react-router-dom";

const Movie = ({id, title, poster}) => {
    const alternative_text = `${title} Poster `;
    const imagePath = `/images/${poster}`;
    
    return (
        <div className = "movie-card">
           <Link to = {"/movies/"+id}>
                <img src = {imagePath} alt = {alternative_text}/>   
            </Link> 
            <div className = "movie-tvshow-title"> {title} </div>
        </div>
    )
}

export default Movie
