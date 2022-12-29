import { Link } from "react-router-dom";
import { StyledCard } from "../../styles/Cards/StyledCards";
import {
  decimalToPercentage,
  formatDateToString,
  getColorRating,
  getImage,
} from "../../utilities/functions";
import notFound from "../../assets/img/notFound.png";

const CardMovies = ({ movies }) => {
  return movies.map((movie, index) => {
    let convertedRating = decimalToPercentage(movie.vote_average.toFixed(2));
    return (
      <StyledCard key={index}>
        <Link className="img-poster" to={`/movie/${movie.id}`}>
          <img
            title={movie.title}
            loading="lazy"
            src={
              movie.poster_path != null
                ? getImage("w500", movie.poster_path)
                : notFound
            }
            alt={movie.title || movie.name}
          />
        </Link>
        <div>
          <Link to={`/movie/${movie.id}`}>
            <h4>{movie.title || movie.name}</h4>
          </Link>
          <p>{formatDateToString(movie.release_date)}</p>
          <p
            className="rate"
            style={{ color: getColorRating(movie.vote_average.toFixed(2)) }}
          >
            {convertedRating}%
          </p>
        </div>
      </StyledCard>
    );
  });
};

export default CardMovies;
