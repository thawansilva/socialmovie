import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, ContainerInfoDetails } from "../../components/Container";
import {
  StyledDetails,
  StyledMainInfo,
  StyledOtherInformation,
} from "../../components/Details/StyledDetails";
import Footer from "../../components/Footer/Footer";
import LoadingCards from "../../components/LoadingCards/LoadingCards";
import Navbar from "../../components/Navbar/Navbar";
import { fetchMovieDetail } from "../../services/MovieDBAPI";
import AboutMovie from "./Info Movie/AboutMovie";
import CastMovie from "./Info Movie/CastMovie";
import ImageMovie from "./Info Movie/ImageMovie";
import Recomendations from "./Info Movie/Recomendations";
import SecondaryInformation from "./Info Movie/SecondaryInformation";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setMovie(await fetchMovieDetail(id));
    };
    fetchAPI();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />
      {movie ? (
        <StyledDetails>
          <StyledMainInfo bgImage={movie.backdrop_path}>
            <ContainerInfoDetails>
              <ImageMovie movie={movie} />
              <AboutMovie movie={movie} />
            </ContainerInfoDetails>
          </StyledMainInfo>
          <Container>
            <StyledOtherInformation>
              <CastMovie id={id} />
              <SecondaryInformation movie={movie} />
            </StyledOtherInformation>
          </Container>
          <Recomendations id={id} />
        </StyledDetails>
      ) : (
        <LoadingCards quant={1} width={1300} height={575} />
      )}
      <Footer />
    </>
  );
};

export default MovieDetails;
