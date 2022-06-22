import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="active item" to="/">Home</Link>
      <Link className="item" to="/about">About</Link>
      <Link className="item" to="/projects">Projects</Link>
      <div className="right menu">
        <Link className="ui item" to="/logout">Logout</Link>
      </div>
    </div>
  );
};
export default Navigation;