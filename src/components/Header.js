
import React from "react";
import {Link} from "react-router-dom";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
  <div className="jumbotron">
      <h1 className="display-1">
        <i className="material-icons brand-icon">fastfood</i> Food Recipe
      </h1>
      <div className="Logout"><button>
             <Link to="/login">LogOut</Link>
               </button></div>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe"
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
