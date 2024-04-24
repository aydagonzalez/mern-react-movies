
import ActorCard from "../../components/ActorCard/ActorCard"
import { movies } from "../../data.js";
import "./ActorListPage.css"

export default function ActorListPage() {
    let result = []
    movies.map((movie, idx) => (
        movie.cast.map((actor, idx) =>
            result.push(actor)
        )
    )
)
const actorsSet = new Set(result,);
const allActors = Array.from(actorsSet)

return (
    <>        <h1>All Actors</h1>
    {/* { console.log(actorsSet)} */}
    <div className="ActorListPage" >

        {allActors.map((act, idx) => 

            <ActorCard className="ActorCard" key={idx} act={act} idx={idx} />
        )
    }
    </div>

        </>
    )
}




