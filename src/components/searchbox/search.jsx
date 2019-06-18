import React, { Component } from "react";
import "./search.css";

class Search extends Component {
  state = {};

  render() {
    const { value, onChange } = this.props;
    return (
      <div className="search-box ">
        <form className="search">
          <input
            type="text"
            name="query"
            placeholder="   Search..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
          />
        </form>
      </div>
    );
  }
}

export default Search;
