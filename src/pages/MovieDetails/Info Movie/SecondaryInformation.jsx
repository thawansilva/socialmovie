import { StyledMovieInformation } from "../../../components/Details/StyledDetails";
import { getMoney } from "../../../utilities/functions";

const SecondaryInformation = ({ movie }) => {
  return (
    <>
      <StyledMovieInformation>
        <div>
          <h3>Status</h3>
          <p>{movie.status}</p>
        </div>
        <div>
          <h3>Budget</h3>
          <p>{getMoney(movie.budget)}</p>
        </div>
        <div>
          <h3>Revenue</h3>
          <p>{getMoney(movie.revenue)}</p>
        </div>
      </StyledMovieInformation>
    </>
  );
};

export default SecondaryInformation;
