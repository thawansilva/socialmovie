import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { StyledDetails } from "../../components/Details/StyledDetails";
import Footer from "../../components/Footer/Footer";
import LoadingCards from "../../components/LoadingCards/LoadingCards";
import Navbar from "../../components/Navbar/Navbar";
import { fetchPerson } from "../../services/MovieDBAPI";
import KnownFor from "./InfoPerson/KnownFor";
import PersonData from "./InfoPerson/PersonData";
import { StyledInfo } from "./StyledPersonData";

const PersonalDetails = () => {
  const [person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      setPerson(await fetchPerson(id));
    };
    fetchAPI();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />
      {person ? (
        <StyledDetails>
          <Container>
            <StyledInfo>
              <PersonData person={person} />
              <KnownFor person={person} id={id} />
            </StyledInfo>
          </Container>
        </StyledDetails>
      ) : (
        <LoadingCards quant={1} width={1300} height={575} />
      )}
      <Footer />
    </>
  );
};

export default PersonalDetails;
