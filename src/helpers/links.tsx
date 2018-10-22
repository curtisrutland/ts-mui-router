import React from "react";
import { Link, NavLink } from 'react-router-dom';

export function createLink(to: string): React.SFC {
    return (props) => <Link to={to} {...props} />
}

export function createNavLink(to: string, activeClass: string): React.SFC {
    return (props) => <NavLink to={to} activeClassName={activeClass} {...props} />
}

export { RouteComponentProps } from "react-router-dom";