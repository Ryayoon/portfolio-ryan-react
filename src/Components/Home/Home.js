import './Home.css';
import emoji from '../../assets/images/Emoji.png';
const Home = () => {

    return (
        <>
            <img className='self-emoji' src={emoji} alt="my-emoji"/>
        <div className="home">
            <div className="text">
                <h2>Hey there, I'm Ryan.</h2>
                <p>I am currently a Part II Computer Systems Engineering Student @ 
                    The University of Auckland looking for potential Internship 
                    opportunities to gain practical experiences in the industry in a professional 
                    manner.
                </p>
            </div>
        </div>
        </>
     );
}
 
export default Home;