import { useEffect, useState } from "react";
import CardMovies from "../../../components/CardMovies/CardMovies";
import ButtonMore from "../../../components/Details/ButtonMore";
import LoadingCards from "../../../components/LoadingCards/LoadingCards";
import { StyledSkeleton } from "../../../components/LoadingCards/StyledSkeleton";
import { fetchPersonMovieCredits } from "../../../services/MovieDBAPI";
import { Grid } from "../../../styles/Layout";
import { StyledKnownFor } from "../StyledPersonData";

const KnownFor = ({ person, id }) => {
  const [creditMovies, setCreditMovies] = useState([]);
  const [showMore, setShowMore] = useState(false);
  let showCredits = creditMovies.slice(0, showMore ? 999 : 8);
  useEffect(() => {
    const fetchAPI = async () => {
      setCreditMovies(await fetchPersonMovieCredits(id));
    };
    fetchAPI();
  }, [id]);

  return (
    <StyledKnownFor>
      {person.name && (
        <div className="name">
          <h1>{person.name}</h1>
        </div>
      )}

      {person.biography && (
        <div className="biography">
          <h3>Biography</h3>
          <p>{person.biography}</p>
        </div>
      )}
      <h2>Works</h2>
      {!creditMovies && (
        <StyledSkeleton>
          <LoadingCards quant={8} width={160} height={300} />
        </StyledSkeleton>
      )}
      {creditMovies && (
        <div className="works">
          {!showCredits && <LoadingCards quant={8} />}
          <Grid>
            <CardMovies movies={showCredits} type="credits" />
          </Grid>
          <ButtonMore
            quant={creditMovies.length}
            handleShow={setShowMore}
            showMore={showMore}
          >
            See
          </ButtonMore>
        </div>
      )}
    </StyledKnownFor>
  );
};

export default KnownFor;
