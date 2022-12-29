import { Link } from "react-router-dom";
import { Flex } from "../../styles/Layout";
import { Container } from "../Container";
import { StyledNavbar } from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Flex>
          <Link to="/">
            <h3>Social Movie</h3>
          </Link>
          <div>
            <Link className="linkPerson" to="/person">
              Person
            </Link>
          </div>
        </Flex>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
