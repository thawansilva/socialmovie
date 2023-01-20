import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { GlobalStyle } from "./styles/Global";
import ThemeColors from "./context/ThemeColor";
import { Person } from "./pages/Person/Person";
import PersonalDetails from "./pages/PersonDetails.jsx/PersonalDetails";
import { SkeletonTheme } from "react-loading-skeleton";
import Homepage from "./pages/Home/Home";
import Search from "./pages/Search/Search";

const RoutesPage = () => {
  return (
    <>
      <SkeletonTheme baseColor="#555" highlightColor="#eee" />
      <ThemeColors>
        <Router>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path=":type/search/:query" element={<Search />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="person" element={<Person />} />
            <Route path="person/:id" element={<PersonalDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <GlobalStyle />
      </ThemeColors>
    </>
  );
};

export default RoutesPage;
