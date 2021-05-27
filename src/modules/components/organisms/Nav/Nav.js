import { NavLink } from "react-router-dom";

const Nav = ({
    routes,
    className
}) => {
    return (
        <ul className={className}>
            {
                routes.map(route => <li>
                    <NavLink
                        exact
                        to={route.path}
                        activeClass={'active'}
                    >
                        {route.name}
                    </NavLink>
                </li>)
            }
        </ul>
    );
};

export default Nav;