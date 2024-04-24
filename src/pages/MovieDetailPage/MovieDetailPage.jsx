import { useParams } from 'react-router-dom';
import "./MovieDetailPage.css"

export default function MovieDetailPage({ movies }) {
    // Get the userId param from the URL.
    let { movieName } = useParams();
    console.log("MOVIE NAME:", movieName)
    const movie = movies.find(m => m.title === movieName)
    console.log("MOVIE FIND:", movie)
    return (
        <>
            <div className='MovieDetailPage'>
                <h1>{movie.title}</h1>
                <img src={movie.posterPath} alt="" />
                <p> Release Date: {movie.releaseDate}</p>
                <p>Cast: {movie.cast.join(', ')}</p>
                {/* <MovieDetailPage className="MovieDetail" movies={movies}/> */}
                {/* <MovieDetailPage className="MovieDetail" key={index} movie={movie} index={index} /> */}
            </div>
        </>
    )
}