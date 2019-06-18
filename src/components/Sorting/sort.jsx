import React, { Component } from "react";
import "../dropdown-b/dropdown-button.css";
import "./sort.css";

class Sort extends Component {
  state = {};
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  columns = [
    { path: "title", label: "Name" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate " }
  ];

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <div className="dropdown ">
        <button
          className="btn dropdown-toggle "
          type="button"
          onClick={this.showDropdownMenu}
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter
        </button>

        {this.state.displayMenu ? (
          <div className="dropdown-content">
            <ul className="list-group">
              {this.columns.map(column => (
                <li
                  className="clickable"
                  id="sorting"
                  key={column.path || column.key}
                  onClick={() => this.raiseSort(column.path)}
                >
                  {column.label}
                  {this.renderSortIcon(column)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

Sort.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Sort;
