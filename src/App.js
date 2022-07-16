import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;