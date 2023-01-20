import { useEffect, useState } from "react";
import CardCast from "../../../components/CardCast/CardCast";
import ButtonMore from "../../../components/Details/ButtonMore";
import LoadingCards from "../../../components/LoadingCards/LoadingCards";
import { StyledSkeleton } from "../../../components/LoadingCards/StyledSkeleton";
import { fetchCastMovie } from "../../../services/MovieDBAPI";
import { Grid } from "../../../styles/Layout";

const CastMovie = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setCast(await fetchCastMovie(id));
    };
    fetchAPI();
  }, [id]);

  let showCast = cast.slice(0, showMore ? 999 : 8);

  return (
    <>
      <div className="cast">
        <h2>Cast</h2>
        {!cast && (
          <StyledSkeleton>
            <LoadingCards quant={8} width={175} height={300} />
          </StyledSkeleton>
        )}
        <Grid>{cast && <CardCast type="cast" cast={showCast} />}</Grid>
        <ButtonMore
          quant={cast.length}
          handleShow={setShowMore}
          showMore={showMore}
        />
      </div>
    </>
  );
};

export default CastMovie;
