
// import "./MovieCard.css"



export default function ActorDetailCard({ mov }) {
    return (
        
        <div className="MovieCard">
                       <h5><strong>{mov.title}</strong></h5>
            <img src={mov.posterPath} alt="" /> 
 
            <p>Release Date: {mov.releaseDate}</p>
        </div>
    )
}

