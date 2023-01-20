import { Container } from "../Container";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <div>
            <p>
              Developed by:
              <a
                target="_blank"
                title="Go to my Portfolio"
                href="https://thawan.netlify.app"
                rel="noopener noreferrer"
              >
                Thawan Silva
              </a>
            </p>
            <p>
              <a
                target="_blank"
                title="Go to the repo of this project"
                href="https://github.com/thawansilva/socialmovie"
                rel="noopener noreferrer"
              >
                Repository on Github
              </a>
            </p>
            <p className="tmdb">
              Thanks for{" "}
              <a
                target="_blank"
                title="Go to TMDB website"
                href="https://www.themoviedb.org/"
                rel="noopener noreferrer"
              >
                TMDB
              </a>
            </p>
          </div>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
