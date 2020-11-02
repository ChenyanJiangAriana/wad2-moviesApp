import React, {useState, useEffect} from "react";
import { Link, Route, withRouter } from "react-router-dom"
import MovieReviews from "../components/movieReviews"
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import {getMovie} from '../api/tmdb-api'

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id) 

  // //allows the component extract the clicked movie's id from the browser URL address. 
  // const [movie, setMovie] = useState(null);
  // useEffect(() => {
  //   getMovie(id).then(movie => {
  //     setMovie(movie);
  //   });
  // }, [id]);

  // return (
  //   <>
  //     {movie ? (
  //       <PageTemplate movie={movie}>
  //         <MovieDetails movie={movie} />
  //       </PageTemplate>
  //       ) : (
  //       <p>Waiting for movie details</p>
  //       )}

  //   </>
  // );
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);