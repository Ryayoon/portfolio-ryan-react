import './Home.css';
import emoji from '../../assets/images/Emoji.png';
const Home = () => {

    return (
        <div className="home">
            <img className='self-emoji' src={emoji} alt="my-emoji"/>
            <div className="text-one">
                <h2>Hey there, I'm Sukju.</h2>
                <p>I am currently a Part II Computer Systems Engineering Student @ 
                    The University of Auckland looking for potential Internship 
                    opportunities to gain practical experiences in the industry in a professional 
                    manner.
                </p>
            </div>
            <div className="text-two">
                <h2>Certification & Awards</h2>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h3 className="cert-awards">AWS Cloud Practitioner - Certificate</h3>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h3 className="cert-awards">Best Technical Implementation @ Devs Hackathon - Award</h3>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h3 className="cert-awards">Certificate of Outstanding Achievement (COMPSCI 101) - Award</h3>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h3 className="cert-awards">NCEA Level 1 & 2 & 3 Excellence - Certificate</h3>
                <br/>
                <hr className="indicate"/>
            </div>
        </div>
     );
}
 
export default Home;