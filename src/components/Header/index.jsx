import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Joke Norris" />
                <h1>Joke Norris</h1>
            </Link>
        </div>
    )
}

export default Header;