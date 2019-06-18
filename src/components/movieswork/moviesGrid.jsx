import React from "react";
import _ from "lodash";
import "react-read-more-less";
import "./movieGrid.css";

const MoviesGrid = props => {
  const { movies } = props;

  const chunked = _.chunk(movies, 2);

  return chunked.map(i => (
    <div className="row">
      {i.map(movie => (
        <div className=" col card  flex-row">
          <div className="card-body ">
            <ul key={movie._id}>
              {
                <li>
                  <strong>Name: </strong>
                  {movie.title}
                </li>
              }
              <li>
                <strong>Genre: </strong>
                {movie.genre.name}
              </li>
              <li>
                <strong>Stocks: </strong>
                {movie.numberInStock}
              </li>
              <li>
                <strong>Ratings: </strong>
                {movie.dailyRentalRate}
              </li>
            </ul>

            <strong>Storyline</strong>
            <ReadMoreAndLess
              className="read-more-content"
              charLimit={20}
              readMoreText="Read more"
              readLessText="Read less"
            >
              {movie.story}
            </ReadMoreAndLess>
          </div>
        </div>
      ))}
    </div>
  ));
};

export default MoviesGrid;
