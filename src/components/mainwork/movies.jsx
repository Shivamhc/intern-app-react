import React, { Component } from "react";
import "./movies.css";
import MoviesGrid from "../movieswork/moviesGrid";

class Movies extends Component {
  state = {};

  render() {
    const { movies, count } = this.props;

    return (
      <div className="container">
        <p>Showing {count} movies in the database</p>

        <MoviesGrid movies={movies} count={count} />
      </div>
    );
  }
}

export default Movies;
