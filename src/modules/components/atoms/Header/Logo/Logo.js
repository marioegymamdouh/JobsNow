import { Link } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo'>
            <Link to={'/'}>
                <strong>
                    JobsNow
                </strong>
            </Link>
        </div>
    )
};

export default Logo;