import { Link } from "react-router-dom";

export default function ActorCard({ act, idx }) {

    return (
        <>
    
            <div className="ActorCard" idx={idx} >
            <Link to={`/actors/${act}`}> 
                <img src={`https://picsum.photos/200/300?random=${idx}`} alt="Actor" />
                <h5>{act}</h5>
             </Link>
            </div>
        </>

    );
};

// export default function MovieCard({ movie }) {
//     return (
        
//         <div className="MovieCard">
//             <Link to={`/movies/${movie.title}`}>  <img src={movie.posterPath} alt="" /> </Link>
//             <h5><strong>{movie.title}</strong></h5>
//             <p>Release Date: {movie.releaseDate}</p>
//         </div>
//     )
// }

