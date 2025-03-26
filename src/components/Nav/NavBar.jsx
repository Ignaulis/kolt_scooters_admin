import Logo from './Logo';
import Nav from './Nav';
import './Nav.css';

export default function NavBar() {

    return(

        <div className='navbar-wrapper'>
            <Logo />
            <Nav />
        </div>
    );
}