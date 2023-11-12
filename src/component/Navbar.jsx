import { Link, useLocation } from "react-router-dom"



const Navbar = ({ promAddress, user, scrollToSection, signout }) => {
    const location = useLocation()


    return (
        <nav className="bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between">
            <Link to='/' preventScrollReset={true}>Home</Link>
            {location.pathname === '/' && (
                <>
                <Link to='#' onClick={() => {scrollToSection('features')}}>Features</Link>
                <Link to='#' onClick={() => {scrollToSection('about-me')}}>Team</Link>
                </>
            )}
            <Link to='http://google.com'>Blog</Link>
            {location.pathname === '/dashboard' && (<div>Prometheus: {promAddress}</div>)}
            {!user && (<Link to='/login'>Login</Link>)}
            {user && (
                <>
                <div>Hello, {user}!</div>
                <button type='button' onClick={() => { signout() }}>Signout</button>
                </>
            )}
        </nav>
    )
}

export default Navbar;