import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__text'>
                Built with ❤ and React and deployed with Github Pages, by <Link to="https://github.com/pedrohenrickcs" className='footer__text'>@PedroHenricks</Link> - © 2022
            </p>
        </footer>
     );
}

export default Footer;