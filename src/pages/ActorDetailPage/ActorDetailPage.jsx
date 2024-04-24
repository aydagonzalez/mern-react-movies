import { useParams } from 'react-router-dom';
import ActorDetailCard from "../../components/ActorDetailCard/ActorDetailCard"
import "../../components/ActorDetailCard/ActorDetailCard.css"

export default function ActorDetailPage({ movies }) {
    // Get the userId param from the URL.
    let { actorName } = useParams();
    const movie = movies.filter((m) => m.cast.includes(actorName) )
    // movie.map((m)=> m.title)
console.log(movie)
// {for (let i=0; i< index; i++) }

    return (
        <>
       <h1>{actorName} Movies</h1>
       <div className='ActorDetailPage'>

       {movie.map((mov, index) => (
                <ActorDetailCard className="MovieCard" key={index} mov={mov} index={index} />
            ))}


            </div>
        </>
    )
}

