

import { Link } from "react-router-dom";
import "./MovieCard.css"



export default function MovieCard({ movie }) {
    return (
        
        <div className="MovieCard">
            <Link to={`/movies/${movie.title}`}>  <img src={movie.posterPath} alt="" /> </Link>
            <h5><strong>{movie.title}</strong></h5>
            <p>Release Date: {movie.releaseDate}</p>
        </div>
    )
}

