import { NavLink } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to={'/'} exact>
                <strong>
                    JobsNow
                </strong>
            </NavLink>
        </div>
    )
};

export default Logo;