import "./Movie.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Movie = () => {
  const [currMovieDetails, setMovieDetails] = useState([]);
 
  const { id } = useParams();

  useEffect(() => {
    getData();
    // window.scrollTo(0,0)
  }, []);
  useEffect(() => {
    getData();
    // window.scrollTo(0,0)
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      });
  };

  return (
    <div className="box">
      <div className="images">
        <img
          src={`https://image.tmdb.org/t/p/original/${currMovieDetails.backdrop_path}`}
        />

        <div className="overlay">
          <div className="left_image">
            <img
              src={`https://image.tmdb.org/t/p/original/${currMovieDetails.poster_path}`}
            />
          </div>
          <div className="details">
            <div className="title">
              <h2>{currMovieDetails.original_title}</h2>
            </div>
            <div className="tagline">
              <p>{currMovieDetails.tagline}</p>
            </div>
            <div className="star_votes">
              <div className="stars">
                <p>{currMovieDetails.vote_average}</p>
                <i className="fas fa-star"></i>
              </div>
              <div className="votes">
                <p>({currMovieDetails.vote_count}) votes</p>
              </div>
            </div>
            <div className="time">
              <p>{currMovieDetails.runtime} mins</p>
            </div>
            <div className="release_date">
              <p>Release date:{currMovieDetails.release_date}</p>
            </div>
            <div className="genress">
              {currMovieDetails && currMovieDetails.genres
                ? currMovieDetails.genres.map((genre) => (
                    <span className="genres" key={genre.id}>
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
            <div className="synopsis">
              <h2>Synopsis</h2>
              <p>{currMovieDetails ? currMovieDetails.overview : ""}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="link_heading">
        <h2>useful links</h2>
      </div>

      <div className="movie_links">
        <div className="link1">
          {currMovieDetails && currMovieDetails.homepage && (
            <a
              href={currMovieDetails.homepage}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="movie_name">Click to watch</span>
            </a>
          )}
        </div>
        <div className="link2">
          {" "}
          {currMovieDetails && currMovieDetails.imdb_id && (
            <a
              href={`http://www.imdb.com/title/${currMovieDetails.imdb_id}`}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              goto <span className="imdb">IMDB</span> official page
            </a>
          )}
        </div>
      </div>
      <div className="production">Production Companies</div>
      {currMovieDetails &&
        currMovieDetails.production_companies &&
        currMovieDetails.production_companies.map(
          (company) =>
            company.logo_path && (
              <div key={company.id} className="company_logo_container">
                <div className="company_logo">
                  {
                    <img
                      src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    />
                  }

                  <h3 className="company_name">{company.name}</h3>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default Movie;
