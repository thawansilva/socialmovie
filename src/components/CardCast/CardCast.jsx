import { Link } from "react-router-dom";
import { StyledCastCard } from "../../styles/Cards/StyledCards";
import { getImage } from "../../utilities/functions";
import castNotFound from "../../assets/img/castNotFound.png";

const CardCast = ({ cast, type = null }) => {
  function getKnownFor(movies) {
    let listMovies = "";

    movies.slice(0, 3).map((movie, index) => {
      listMovies += `${movie.original_title}${
        index != movies.length - 1 ? ", " : "."
      }`;
    });

    return listMovies;
  }

  return cast.map((person, index) => (
    <StyledCastCard type={type} key={index}>
      <Link to={`/person/${person.id}`}>
        <img
          title={person.name}
          loading="lazy"
          src={
            person.profile_path != null
              ? getImage("w500", person.profile_path)
              : castNotFound
          }
          alt={person.name}
        />
      </Link>
      <div>
        <Link to={`/person/${person.id}`}>
          <h4>{person.name}</h4>
        </Link>
      </div>

      {person.known_for && (
        <div>
          <p>{getKnownFor(person.known_for)}</p>
        </div>
      )}

      {person.character && (
        <div>
          <p>{person.character}</p>
        </div>
      )}
    </StyledCastCard>
  ));
};

export default CardCast;
