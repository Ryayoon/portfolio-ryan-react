import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 style={{
                fontSize: '3vh'
            }}>My Portfolio</h1>
            <div className="links">
                <ul>
                    <a href="/">Home</a>
                    <a href="./About">About Myself</a>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;