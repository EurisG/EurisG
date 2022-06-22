import React from "react";

const Navigation = () => {
  return (
    <div className="ui secondary pointing menu">
      <a className="active item">Home</a>
      <a className="item">About</a>
      <a className="item">Projects</a>
      <div className="right menu">
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};
export default Navigation;