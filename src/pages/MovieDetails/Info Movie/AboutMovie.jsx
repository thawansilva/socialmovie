import {
  convertRuntime,
  decimalToPercentage,
  formatDateToString,
  getColorRating,
} from "../../../utilities/functions";
import { AboutMovieStyled } from "./InfoMovieStyled";

const AboutMovie = ({ movie }) => {
  function getGenre(genres) {
    let listOfGenres = "";
    genres.map((item, index) => {
      listOfGenres += `${item.name}${index != genres.length - 1 ? ", " : ""}`;
    });
    return listOfGenres;
  }
  return (
    <AboutMovieStyled>
      <h1>{movie.original_title}</h1>
      <div>
        <p className="releaseDate">{formatDateToString(movie.release_date)} </p>
        <p className="runtime"> - {convertRuntime(movie.runtime)} - </p>
        <p className="genre"> {getGenre(movie.genres)}</p>
      </div>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div className="sm-details">
        <p
          className="rate"
          style={{ color: getColorRating(movie.vote_average.toFixed(2)) }}
        >
          {decimalToPercentage(movie.vote_average.toFixed(2))}%
        </p>
      </div>
    </AboutMovieStyled>
  );
};

export default AboutMovie;
