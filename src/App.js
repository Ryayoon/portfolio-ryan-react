import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import BottomNavbar from './Components/BottomNavbar/BottomNavbar'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
            <BottomNavbar />
        </div>
    );
}

export default App;