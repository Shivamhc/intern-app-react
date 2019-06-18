import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Dropdown from "../dropdown-b/dropdown-button";
import _ from "lodash";
import Search from "../searchbox/search";
import Movies from "../mainwork/movies";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../pagination";
import "./navbar.css";
import Pagination from "../common/pagination";
import Sort from "../Sorting/sort";
import logo from "../codebinaryLogo.jpg";

class Navbar extends Component {
  constructor() {
    super();
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true,
      movies: [],
      genres: [],
      pageSize: 6,
      currentPage: 1,
      sortColumn: { path: "title", order: "asc" },
      searchQuery: "",
      selectedGenre: null
    };
  }
  state = {};

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  async componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    const movies = getMovies();
    this.setState({ movies: movies, genres });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const collapsed = this.state.collapsed;

    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    const { length: count } = this.state.movies;

    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      suggestions,
      searchQuery
    } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database</p>;
    }

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-light 
        static-top "
        >
          <div className="container">
            {" "}
            <a className="navbar-brand " href="https://codebinary.in/">
              <img src={logo} alt="Logo" target="_blank" />
            </a>
            <button
              onClick={this.toggleNavbar}
              className={`${classTwo}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
              <ul className="navbar-nav  flex-row">
                <li className="nav-item active" />
                <div className="dropdown-container">
                  <Dropdown
                    genres={this.state.genres}
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}
                  />
                </div>
                <div className="search-container">
                  <Search value={searchQuery} onChange={this.handlSearch} />
                </div>
                <div className="sort-container">
                  <Sort
                    movies={movies}
                    sortColumn={sortColumn}
                    onSort={this.handleSort}
                  />
                </div>
                <div className="login-button">
                  <a
                    href="https://codebinaryinitiatives.setmore.com/"
                    className="login clickable
                    "
                    target="_blank"
                  >
                    Login
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mainbody-container">
          <Movies
            movies={movies}
            count={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </div>
        <div className="pagination-container">
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
