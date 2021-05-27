import { NavLink } from "react-router-dom";

const Nav = ({
    routes,
    className
}) => {
    return (
        <ul className={className}>
            {
                routes.map((route, index) => <li key={index}>
                    <NavLink
                        exact
                        to={route.path}
                        activeClassName={'active'}
                    >
                        {route.name}
                    </NavLink>
                </li>)
            }
        </ul>
    );
};

export default Nav;