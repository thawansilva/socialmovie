import { useEffect, useState } from "react";
import CardMovies from "../../../components/CardMovies/CardMovies";
import { Container } from "../../../components/Container";
import { fetchMoviesRecomendations } from "../../../services/MovieDBAPI";
import { Grid } from "../../../styles/Layout";

const Recomendations = ({ id }) => {
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setRecomendations(await fetchMoviesRecomendations(id));
    };
    fetchAPI();
  }, [id]);

  return (
    <>
      <Container>
        <h2>Recomendations</h2>
        {!recomendations && (
          <StyledSkeleton>
            <LoadingCards quant={8} />
          </StyledSkeleton>
        )}
        <Grid>
          {recomendations && <CardMovies movies={recomendations.slice(0, 8)} />}
        </Grid>
      </Container>
    </>
  );
};

export default Recomendations;
