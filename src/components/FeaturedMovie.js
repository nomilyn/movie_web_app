import { Link } from "react-router-dom";

const FeaturedMovie = ({id, title, poster}) => {
    const alternative_text = `${title} Poster `;
    const imagePath = `/images/${poster}`;
    return (
        <div className = "movie-card">
           <Link to = {"/movies/"+id}>
                <img src = {imagePath} alt = {alternative_text}/>   
            </Link> 
        </div>
    )
}

export default FeaturedMovie
