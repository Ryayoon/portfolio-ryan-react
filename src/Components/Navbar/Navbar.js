import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 style={{
                fontSize: '3vh'
            }}>My Portfolio</h1>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="/Users/GGPC/OneDrive/Desktop/portfolio-ryan-react/public">About myself</a>
            </div>
        </nav>
     );
}
 
export default Navbar;