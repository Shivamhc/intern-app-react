import React, { Component } from "react";
import "./dropdown-button.css";

class Dropdown extends Component {
  state = {};
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

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

  render() {
    const {
      genres,
      selectedItem,
      textProperty,
      valueProperty,
      onItemSelect
    } = this.props;
    return (
      <div className="dropdown">
        <button
          className="btn dropdown-toggle animate slideIn"
          type="button"
          onClick={this.showDropdownMenu}
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Genre
        </button>

        {this.state.displayMenu ? (
          <div className="dropdown-content">
            <ul className="list-group">
              {genres.map(genre => (
                <li
                  onClick={() => onItemSelect(genre)}
                  key={genre[valueProperty]}
                  className={
                    genre === selectedItem
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                >
                  {genre[textProperty]}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Dropdown;
