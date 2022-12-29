import { Container } from "../../components/Container";
import notFound from "../../assets/notFound.svg";
import { StyledNotFound } from "./notFound";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <StyledNotFound>
          <div>
            <h2>Ops... Sorry :(</h2>
            <p>That page cannot be found</p>
            <Link to="/">Go to Homepage</Link>
          </div>
          <img src={notFound} alt="Not found image" />
        </StyledNotFound>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
