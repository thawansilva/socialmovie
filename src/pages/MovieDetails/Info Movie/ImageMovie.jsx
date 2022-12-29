import LoadingCards from "../../../components/LoadingCards/LoadingCards";
import { getImage } from "../../../utilities/functions";
import { StyledImageMovie } from "./InfoMovieStyled";

const ImageMovie = ({ movie }) => {
  return movie ? (
    <StyledImageMovie>
      <img
        title={movie.original_title}
        loading="lazy"
        src={
          movie.poster_path != null
            ? getImage("original", movie.poster_path)
            : notFound
        }
        alt={movie.original_title}
      />
    </StyledImageMovie>
  ) : (
    <LoadingCards quant={1} />
  );
};

export default ImageMovie;
