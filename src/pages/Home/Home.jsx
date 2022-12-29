import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import CardMovies from "../../components/CardMovies/CardMovies";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import { StyledSkeleton } from "../../components/LoadingCards/StyledSkeleton";
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchMovies } from "../../services/MovieDBAPI";
import { Grid } from "../../styles/Layout";
import Pagination from "../../components/Pagination/Pagination";
import LoadingCards from "../../components/LoadingCards/LoadingCards";
import { StyledPagination } from "../../components/Pagination/StyledPagination";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovies(page));
    };
    fetchAPI();
    window.scrollTo(0, 0);
  }, [page]);

  const handleSubmit = async (input) => {
    input && navigate(`/movies/search/${input}`);
  };

  if (movies.errors) {
    alert("Something went wrong, the page will be reload");
    window.location.reload();
  }

  return (
    <>
      <Navbar />
      <Container>
        <SearchForm handleSubmit={handleSubmit} type="Movie" />
        <h1 style={{ marginTop: "15px" }}>Popular Movies</h1>

        {!movies.results && (
          <StyledSkeleton>
            <LoadingCards quant={8} />
          </StyledSkeleton>
        )}

        {movies.results && movies.results.length == 0 && (
          <p style={{ color: "#111", height: "450px" }}>
            No results were found that match your search criteria.
          </p>
        )}
        <Grid>{movies.results && <CardMovies movies={movies.results} />}</Grid>
        <StyledPagination>
          <div className="pagination">
            <div>
              <p style={{ fontWeight: "bold" }}>
                Page {page} of {movies.total_pages}
              </p>
              <p>{movies.total_results} result(s)</p>
            </div>
            <Pagination
              limit={20}
              total={movies.total_pages}
              offset={offset}
              setOffset={setOffset}
              setPage={setPage}
            />
          </div>
        </StyledPagination>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
