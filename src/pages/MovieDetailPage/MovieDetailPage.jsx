import { Link } from "react-router-dom";
import ActorCard from "../../components/ActorCard/ActorCard";

import { useParams } from 'react-router-dom';
import "./MovieDetailPage.css"

export default function MovieDetailPage({ movies, act, idx }) {
    // Get the userId param from the URL.
    let result = []
    let { movieName } = useParams();
    console.log("MOVIE NAME:", movieName)
    const movie = movies.find(m => m.title === movieName)
    movie.cast.map((actor, idx) =>
        result.push(actor)
    )
    const actorsSet = new Set(result,);
    const allActors = Array.from(actorsSet)

    console.log("RESULT:", result)
    return (
        <>
            <div className='MovieDetailPage'>
                <h1>{movie.title}</h1>
                <img src={movie.posterPath} alt="" />
                <p> Release Date: {movie.releaseDate}</p>
                <h4>Cast:</h4>
                <div className="ActorListPage" >

                    {allActors.map((act, idx) =>

                        <ActorCard className="ActorCard" key={idx} act={act} idx={idx} />
                    )
                    }
                </div>
                {/* <p>Cast: {movie.cast.join(', ')}</p> */}
                {/* <MovieDetailPage className="MovieDetail" movies={movies}/> */}
                {/* <MovieDetailPage className="MovieDetail" key={index} movie={movie} index={index} /> */}

            </div>



        </>
    )
}