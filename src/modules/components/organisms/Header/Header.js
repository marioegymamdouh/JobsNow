import Logo from "../../atoms/Header/Logo/Logo";
import './Header.css'
import Nav from "../Nav/Nav";

const Header = ({
    routes
}) => {
    return (
        <div className='header'>
            <Logo/>
            <Nav
                className={'headerNav'}
                routes={routes}
            />
        </div>
    );
};

export default Header;