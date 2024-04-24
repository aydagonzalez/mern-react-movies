import MovieCard from "../../components/MovieCard/MovieCard"
import "./MoviesListPage.css"
export default function MoviesListPage({ movies }) {
    return (
        <>
        <h1>Movie List</h1>
        <div className="MoviesListPage">
            {movies.map((movie, index) => (
                <MovieCard className="MovieCard" key={index} movie={movie} index={index} />
            ))}
        </div>
        </>
    )
}


