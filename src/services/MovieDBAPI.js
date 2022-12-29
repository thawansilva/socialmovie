const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`;
const MOVIE_URL = `${BASE_URL}/movie/`;
const PEOPLE_URL = `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=`;
const PERSON_URL = `${BASE_URL}/person/`;
const POSTER_URL = "https://image.tmdb.org/t/p/original/";
const SEARCH_MOVIE = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=`;
const SEARCH_PERSON = `${BASE_URL}/search/person?api_key=${API_KEY}&language=en-US&query=`;

const fetchMovies = (page, url = MOVIES_URL) => {
  const movies = fetch(url + page)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err.message));
  return movies;
};

const fetchMoviesRecomendations = (id) => {
  const linkRecomendation = `${MOVIE_URL + id}/similar?api_key=${API_KEY}`;

  const recomendation = fetch(linkRecomendation)
    .then((res) => res.json())
    .then(({ results: data }) => {
      let listRecomendation = data.map((movie) => ({
        id: movie["id"],
        title: movie["title"],
        poster_path: movie["poster_path"],
        vote_average: movie["vote_average"],
        release_date: movie["release_date"],
      }));
      return listRecomendation;
    })
    .catch((err) => console.error(err));
  return recomendation;
};

const fetchMovieDetail = (id) => {
  const linkDetail = `${MOVIE_URL + id}?api_key=${API_KEY}`;
  const movie = fetch(linkDetail)
    .then((res) => res.json())
    .then((data) => {
      let dataDetailMovie = {
        id: data["id"],
        backdrop_path: POSTER_URL + data["backdrop_path"],
        poster_path: POSTER_URL + data["poster_path"],
        genres: data["genres"],
        title: data["title"],
        overview: data["overview"],
        vote_average: data["vote_average"],
        release_date: data["release_date"],
        revenue: data["revenue"],
        runtime: data["runtime"],
        budget: data["budget"],
        status: data["status"],
      };
      return dataDetailMovie;
    })
    .catch((err) => console.error(err.message));

  return movie;
};

const fetchCastMovie = (id) => {
  const linkCast = `${
    MOVIE_URL + id
  }/credits?api_key=${API_KEY}&language=en-US`;
  const cast = fetch(linkCast)
    .then((res) => res.json())
    .then(({ cast: data }) => {
      let dataCast = data.map((cast) => ({
        id: cast["id"],
        name: cast["name"],
        original_name: cast["original_name"],
        character: cast["character"],
        profile_path: cast["profile_path"],
      }));
      return dataCast;
    });
  return cast;
};

const fetchSearchPerson = (search, page = 1) => {
  const searchPerson = fetch(SEARCH_PERSON + search + `&page=${page}`)
    .then((res) => res.json())
    .then((data) => data);
  return searchPerson;
};

const fetchSearchMovies = (search, page = 1) => {
  const searchMovies = fetch(SEARCH_MOVIE + search + `&page=${page}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err.message));

  return searchMovies;
};

const fetchPeople = (page, url = PEOPLE_URL) => {
  const people = fetch(url + page)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err.message));
  return people;
};

const fetchPerson = (id) => {
  const linkPerson = `${PERSON_URL + id}?api_key=${API_KEY}`;
  const person = fetch(linkPerson)
    .then((res) => res.json())
    .then((data) => {
      let personData = {
        id: data["id"],
        name: data["name"],
        place_of_birth: data["place_of_birth"],
        birthday: data["birthday"],
        profile_path: data["profile_path"],
        known_for_department: data["known_for_department"],
        gender: data["gender"],
        biography: data["biography"],
        deathday: data["deathday"],
      };
      return personData;
    });
  return person;
};
const fetchPersonMovieCredits = (id) => {
  const linkMovieCredits = `${
    PERSON_URL + id
  }/combined_credits?api_key=${API_KEY}`;
  const PersonCredits = fetch(linkMovieCredits)
    .then((res) => res.json())
    .then(({ cast: data }) => {
      let credits = data.map((movie) => ({
        id: movie["id"],
        original_title: movie["original_title"],
        title: movie["title"],
        release_date: movie["release_date"],
        poster_path: movie["poster_path"],
        vote_average: movie["vote_average"],
      }));
      return credits;
    });
  return PersonCredits;
};

const fetchPersonImage = (id) => {
  const linkPersonImage = `${PERSON_URL + id}/images?api_key=${API_KEY}`;
  const personImage = fetch(linkPersonImage)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return personImage;
};
export {
  fetchMovies,
  fetchMovieDetail,
  fetchSearchMovies,
  fetchMoviesRecomendations,
  fetchCastMovie,
  fetchPeople,
  fetchPerson,
  fetchPersonImage,
  fetchSearchPerson,
  fetchPersonMovieCredits,
};
