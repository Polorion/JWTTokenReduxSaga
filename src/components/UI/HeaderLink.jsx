import * as React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = (props) => {
  return <NavLink to={`${props.link}`}>{props.name}</NavLink>;
};

export default HeaderLink;
