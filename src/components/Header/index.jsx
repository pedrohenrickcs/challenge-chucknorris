import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <h1>Joke Norris</h1>
            </Link>
        </div>
    )
}

export default Header;