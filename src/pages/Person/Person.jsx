import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCast from "../../components/CardCast/CardCast";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import LoadingCards from "../../components/LoadingCards/LoadingCards";
import { StyledSkeleton } from "../../components/LoadingCards/StyledSkeleton";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import { StyledPagination } from "../../components/Pagination/StyledPagination";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchPeople } from "../../services/MovieDBAPI";
import { Grid } from "../../styles/Layout";

export const Person = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      setPeople(await fetchPeople(page));
    };
    fetchAPI();
    window.scrollTo(0, 0);
  }, [page]);

  const handleSubmit = async (input) => {
    input && navigate(`/person/search/${input}`);
  };
  return (
    <>
      <Navbar />
      <Container>
        <SearchForm handleSubmit={handleSubmit} type="Person" />
        <h1 style={{ margin: "25px 0 5px 0" }}>Popular People</h1>

        {people.results && people.results.length == 0 && (
          <p style={{ color: "#111", height: "450px" }}>
            No results were found that match your search criteria.
          </p>
        )}
        {!people && (
          <StyledSkeleton>
            <LoadingCards quant={8} />
          </StyledSkeleton>
        )}
        <Grid>{people.results && <CardCast cast={people.results} />}</Grid>
        <StyledPagination>
          <div className="pagination">
            <div>
              <p style={{ fontWeight: "bold" }}>
                Page {page} of {people.total_pages}
              </p>
              <p>{people.total_results} result(s)</p>
            </div>
            <Pagination
              limit={20}
              total={people.total_pages}
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
