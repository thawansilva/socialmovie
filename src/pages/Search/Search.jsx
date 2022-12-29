import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardCast from "../../components/CardCast/CardCast";
import CardMovies from "../../components/CardMovies/CardMovies";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import LoadingCards from "../../components/LoadingCards/LoadingCards";
import { StyledSkeleton } from "../../components/LoadingCards/StyledSkeleton";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import { StyledPagination } from "../../components/Pagination/StyledPagination";
import SearchForm from "../../components/SearchForm/SearchForm";
import {
  fetchSearchMovies,
  fetchSearchPerson,
} from "../../services/MovieDBAPI";
import { Grid } from "../../styles/Layout";

const Search = () => {
  let { query, type } = useParams();
  const [page, setPage] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      if (query) {
        type == "movies"
          ? setSearchResult(await fetchSearchMovies(query, page))
          : setSearchResult(await fetchSearchPerson(query, page));
      }
    };
    fetchAPI();
    window.scrollTo(0, 0);
  }, [search, query, page]);

  useEffect(() => {
    setPage(1);
    setOffset(0);
  }, [query]);

  const handleSubmit = async (input) => {
    type == "movies"
      ? navigate(`/movies/search/${input}`)
      : navigate(`/person/search/${input}`);
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchForm handleSubmit={handleSubmit} type="Search" />

        {!searchResult.results && (
          <StyledSkeleton>
            <LoadingCards quant={8} />
          </StyledSkeleton>
        )}

        {searchResult.results && searchResult.results.length == 0 && (
          <p style={{ color: "#111", height: "450px" }}>
            No results were found that match your search criteria.
          </p>
        )}

        <Grid>
          {searchResult.results && type == "movies" && (
            <CardMovies movies={searchResult.results} />
          )}
          {searchResult.results && type == "person" && (
            <CardCast cast={searchResult.results} />
          )}
        </Grid>

        <StyledPagination>
          <div className="pagination">
            <div>
              <p style={{ fontWeight: "bold" }}>
                Page {page} of {searchResult.total_pages}
              </p>
              <p>{searchResult.total_results} result(s)</p>
            </div>
            <Pagination
              limit={20}
              total={searchResult.total_pages}
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

export default Search;
